import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import ProjectList from "../components/ProjectList";
import DeleteOrLeaveDialog from "../components/DeleteOrLeaveDialog";
import {
  setActiveAction,
  setMyProjects,
  setJoinedProjects,
  setProjectsLoading,
  setProjectsError,
  removeProject,
} from "../slice";
import { getMyProjects, getAllProjects, deleteProject } from "../api/api";

// MyProjectsPage.tsx
export default function MyProjectsPage() {
  const activeAction = useAppSelector((state) => state.projects.activeAction);
  const selectedProject = useAppSelector(
    (state) => state.projects.selectedProject
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadProjects = async () => {
      dispatch(setProjectsLoading(true));
      try {
        const [owned, all] = await Promise.all([
          getMyProjects(),
          getAllProjects(),
        ]);
        dispatch(setMyProjects(owned));
        // Joined projects = all projects minus the ones I created
        const ownedIds = new Set(owned.map((p) => p.id));
        const joined = all.filter((p) => !ownedIds.has(p.id));
        dispatch(setJoinedProjects(joined));
      } catch (err: any) {
        dispatch(setProjectsError(err.message || "Failed to load projects"));
        console.error("Projects fetch error:", err);
      } finally {
        dispatch(setProjectsLoading(false));
      }
    };
    loadProjects();
  }, [dispatch]);

  const handleConfirm = async () => {
    if (!selectedProject) {
      dispatch(setActiveAction(null));
      return;
    }

    switch (activeAction) {
      case "delete":
        try {
          await deleteProject(selectedProject.id);
          dispatch(removeProject(selectedProject.id));
        } catch (err) {
          console.error("Delete failed:", err);
        }
        break;

      case "leave":
        // TODO: Implement leave project API when available
        console.log("Leaving project:", selectedProject.id);
        break;
    }
    dispatch(setActiveAction(null));
  };

  return (
    <div className="min-h-screen p-5 flex flex-col justify-start items-start">
      {/* Header section */}
      <div className="mb-5">
        <h1 className="text-5xl font-serif font-bold text-zinc-200 leading-relaxed">
          Project Group List
        </h1>
        <p className="text-zinc-400">
          An overview of all project groups you have created and joined for
          active collaboration.
        </p>
      </div>

      <ProjectList />
      <DeleteOrLeaveDialog onConfirm={handleConfirm} />
    </div>
  );
}

import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import ProjecAlertDialog from "../components/DeleteOrLeaveDialog";
import ProjectList from "../components/ProjectList";
import { setActiveAction } from "../slice";

// MyProjectsPage.tsx
export default function MyProjectsPage() {
  const activeAction = useAppSelector((state) => state.projects.activeAction);
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    switch (activeAction) {
      case "delete":
        console.log("deleteing");
        break;

      case "leave":
        console.log("leaving");
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
      {/* <ProjectList /> */}
      <ProjecAlertDialog onConfirm={handleConfirm} />
    </div>
  );
}

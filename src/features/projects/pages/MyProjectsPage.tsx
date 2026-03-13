import { useAppDispatch } from "@/hooks/useAppHook";
import ProjecAlertDialog from "../components/DeleteOrLeaveDialog";
import ProjectList from "../components/ProjectList";
import ProjectTab from "../components/ProjectTab";
import { setIsDeleteAlert } from "../slice";

// MyProjectsPage.tsx
export default function MyProjectsPage() {
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-screen p-5 flex flex-col justify-start items-start">
      {/* Header section */}
      <div>
        <h1 className="text-5xl font-serif font-bold text-zinc-200 leading-relaxed">
          Project Group List
        </h1>
        <p className="text-zinc-400">
          An overview of all project groups you have created and joined for
          active collaboration.
        </p>
      </div>

      {/* <ProjectTabs /> */}
      <ProjectTab />
      <ProjectList />
      {/* <ProjectList /> */}
      <ProjecAlertDialog
        title="Delete this project?"
        message="This action cannot be undone."
        confirmText="Delete"
        onConfirm={() => {
          // handle delete
          dispatch(setIsDeleteAlert(false));
        }}
        onCancel={() => dispatch(setIsDeleteAlert(false))}
      />
    </div>
  );
}

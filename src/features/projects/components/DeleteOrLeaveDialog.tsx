import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import { setActiveAction, setIsDeleteAlert } from "../slice";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

type ProjectAlertDialogProps = {
  onConfirm: () => void;
};

const ACTION_CONFIG = {
  delete: {
    title: "Delete project?",
    message: "This will permanently remove the project.",
    confirmText: "Delete",
  },
  leave: {
    title: "Leave project?",
    message: "You will no longer have access to this project.",
    confirmText: "Leave",
  },
};

export default function ProjectAlertDialog({
  onConfirm,
}: ProjectAlertDialogProps) {
  const activeAction = useAppSelector((state) => state.projects.activeAction);
  const dispatch = useAppDispatch();

  const config = activeAction ? ACTION_CONFIG[activeAction] : null;
  return (
    <AlertDialog
      open={activeAction !== null}
      onOpenChange={() => dispatch(setActiveAction(null))}
    >
      <AlertDialogContent className="bg-[#1c1c1c] text-white border-zinc-700 rounded-lg w-[420px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white text-lg font-semibold">
            {config?.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300 text-sm">
            {config?.message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-transparent border border-gray-500 text-white hover:bg-gray-700 hover:text-white"
            onClick={() => dispatch(setActiveAction(null))}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700 text-white border-none"
            onClick={onConfirm}
          >
            {config?.confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

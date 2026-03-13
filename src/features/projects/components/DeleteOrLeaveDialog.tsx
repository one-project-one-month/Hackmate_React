import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import { setIsDeleteAlert } from "../slice";
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
  title: string;
  message: string;
  confirmText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ProjectAlertDialog({
  title,
  message,
  confirmText,
  onConfirm,
  onCancel,
}: ProjectAlertDialogProps) {
  const isDeleteAlert = useAppSelector((state) => state.projects.isDeleteAlert);
  const dispatch = useAppDispatch();

  return (
    <AlertDialog
      open={isDeleteAlert}
      onOpenChange={(open) => dispatch(setIsDeleteAlert(open))}
    >
      <AlertDialogContent className="bg-[#1c1c1c] text-white border-zinc-700 rounded-lg w-[420px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white text-lg font-semibold">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300 text-sm">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="bg-transparent border border-gray-500 text-white hover:bg-gray-700 hover:text-white"
            onClick={onCancel}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700 text-white border-none"
            onClick={onConfirm}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

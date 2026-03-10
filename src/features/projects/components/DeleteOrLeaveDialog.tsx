type AlertDialogProps = {
  open: boolean;
  title: string;
  message: string;
  confirmText: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function AlertDialog({
  open,
  title,
  message,
  confirmText,
  onConfirm,
  onCancel,
}: AlertDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-[#1c1c1c] text-white p-6 rounded-lg w-[420px] shadow-lg">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        <p className="text-sm text-gray-300 mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-1.5 border border-gray-500 rounded text-sm hover:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-1.5 bg-red-600 rounded text-sm hover:bg-red-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

// template for alert dialog, accpet delete or leave props

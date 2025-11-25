"use client";

export default function DeleteModal({
  isOpen,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  onConfirm,
  onCancel,
  icon,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box text-center">
        <div className="flex mb-2.5 justify-center text-red-500">{icon}</div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action justify-evenly">
          <button className="btn btn-error" onClick={onConfirm}>
            Delete
          </button>
          <button className="btn btn-primary btn-outline" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

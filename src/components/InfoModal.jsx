"use client";

export default function InfoModal({
  isOpen,
  title = "Coming Soon",
  message = "This feature will be implemented in a future update.",
  onClose,
  icon,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box text-center">
        <div className="flex mb-2.5 justify-center text-teal-500">{icon}</div>

        <h3 className="font-bold text-lg">{title}</h3>

        <p className="py-4 text-accent">{message}</p>

        <div className="modal-action flex justify-center">
          <button className="btn btn-primary" onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

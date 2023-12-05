type Props = {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
};

const Modal = ({ isOpen, imageUrl, onClose }: Props) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity"
    : "hidden";

  const closeModal = () => onClose();

  return (
    <div className={modalClasses} onClick={closeModal}>
      <div className="modal-container">
        <img src={imageUrl} alt="" className="rounded-md" />
      </div>
    </div>
  );
};

export default Modal;

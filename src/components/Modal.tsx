import "./styles/Modal.css"
const Modal = ({ isOpen, title, message, onClose, onConfirm }) => {
  if (!isOpen) return null
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            NO, CANCEL
          </button>
          <button className="btn-confirm" onClick={onConfirm}>
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal

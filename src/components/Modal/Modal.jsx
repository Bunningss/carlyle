import styles from "./Modal.module.css";

const Modal = ({ disabled, header, body }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}></div>
    </div>
  );
};

export default Modal;

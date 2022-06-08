import "./Modal.css";

const Modal = (props) => {
  const { className, modalRef } = props;

  return (
    <div ref={modalRef} className={`${className} modal`}>
      <p>Meu modal! dddd</p>
    </div>
  );
};

export default Modal;

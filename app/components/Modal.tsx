import React, { FC } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (show: boolean) => boolean | void;
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <>
      <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          {children}
          <div className="modal-action" onClick={() => setModalOpen(false)}>
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

// onClick={() => window.my_modal_3.showModal()}

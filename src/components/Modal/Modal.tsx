import * as React from "react";
import "./Modal.css";

export interface IProps {
  showModal: boolean;
  handleClose: () => void;
  modalTitle: string;
  modalBody?: JSX.Element;
  modalFooter?: JSX.Element;
}

const Modal: React.SFC<IProps> = ({
  showModal,
  handleClose,
  modalTitle,
  modalBody,
  modalFooter
}) => {
  return (
    <div
      className="modalDialog"
      style={{ display: `${showModal ? "block" : "none"}` }}
    >
      <div>
        <a href="#close" title="Close" className="close" onClick={handleClose}>
          X
        </a>
        <h2>{modalTitle}</h2>
        <div className="modalBody">{modalBody}</div>
        <footer>{modalFooter}</footer>
      </div>
    </div>
  );
};

export default Modal;

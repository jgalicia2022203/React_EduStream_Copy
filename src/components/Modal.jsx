import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose, children }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={{
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      content: {
        position: "static",
        inset: "unset",
        padding: "0",
        borderRadius: "0.5rem",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        width: "90%",
        maxWidth: "500px",
        background: "white",
      },
    }}
  >
    {children}
  </Modal>
);

export default CustomModal;

import React, { useState } from "react";
import Modal from "./Modal.jsx";

export default function AddReviewButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <button
        data-testid="ClickIndicator"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        ADD A REVIEW +
      </button>
      <Modal
        visable={isOpen}
        close={() => {
          setIsOpen(false);
        }}
      >
        Title of Product
      </Modal>
    </div>
  );
}
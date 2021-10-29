import React from 'react';

const AskAQuestion = ({ handleClose, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">

        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default AskAQuestion;
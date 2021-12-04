import React from "react";


export default function Modal({ children, visable, close }) {
  if (!visable) return null;
  return (
    <>
      <div id="rmodal-overlay" onClick={close}></div>
      <div id="rmodal-wrapper">
        <div>{children}</div>
        <div id="review-x">
          <i id="review-z" onClick={close} className="fas fa-times-circle qa-close-icon" ></i>
        </div>
      </div>
    </>
  );
}


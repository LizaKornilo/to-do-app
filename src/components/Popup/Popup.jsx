import React from "react";
import "./popup.css";

function Popup({ trigger, setTrigger, children }) {
  return trigger ? (
    <div className="overlay">
      <div className="popup">
        <button className="popup__close-btn" onClick={() => setTrigger(false)}>+</button>
        {children}
      </div>
    </div>
  ) : "";
}

export default Popup;
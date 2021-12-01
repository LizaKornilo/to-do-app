import React from "react";
import "./popup.css";

function Popup({trigger, setTrigger, children}) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          &#10006;
        </button>

        {children}
      </div>
    </div>
  ) : "";
}

export default Popup;
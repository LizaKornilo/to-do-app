import React from "react";
import "./popup.css";

function Popup({ trigger, setTrigger, card, updateCard }) {
  const [name, setName] = React.useState("");

  const cardNameChange = event => {
    setName(event.target.value);
  }

  const handleSubmit = event => {
    updateCard(name)
    setTrigger(false)

    event.preventDefault();
  }

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          &#10006;
        </button>

        <form onSubmit={handleSubmit}>
          <input className='popup__card-name' defaultValue={card.name} onChange={cardNameChange} type='text' placeholder='enter task name...' required
            style={{ contenteditable: "true" }} />
          <input className='popup__submit-btn' type="submit" value="ok" />
        </form>

      </div>
    </div>
  ) : "";
}

export default Popup;
import React, { useState } from "react";
import './addListPanel.css'

export function AddListPanel({ addList }) {
  const [btnIsClicked, setBtnIsClicked] = useState(false);

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (!value) {
    } else {
      addList(value);
      setValue("");
      setBtnIsClicked(false);
    }
    event.preventDefault();
  };

  return !btnIsClicked ? (
    <div className="add-list-btn" onClick={() => { setBtnIsClicked(true); }} style={{}}> + Add new list</div >
  ) : (
    <form className="add-list-form" onSubmit={handleSubmit}>
      <input autoFocus id="list-input-field" className="add-list-form__input-field input-field" value={value} onChange={handleChange} type="text" placeholder="enter new list..." />
      <input className="add-list-form__ok-btn circle-btn" type="submit" value="+" />
      <input className="add-list-form__cancel-btn circle-btn" type="button" onClick={() => { setBtnIsClicked(false); setValue(""); }} value="+" />
    </form>
  );
}

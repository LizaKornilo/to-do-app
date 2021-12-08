import React from "react";
import './list.css'

export function List({ list, deleteList }) {
  return (
      <div className="list">
        <div className="list__name">{list.name}</div>
        <div className="list__delete-btn small-circle-btn" onClick={(evt) => { evt.stopPropagation(); deleteList(list) }}>+</div>
      </div >
  );
}

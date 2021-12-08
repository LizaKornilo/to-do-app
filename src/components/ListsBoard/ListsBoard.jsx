import React from "react";
import { NavLink } from "react-router-dom";
import { List } from "../List/List.jsx";

export function ListsBoard({ lists, deleteList }) {
  return (
    <ul className="lists">
      {lists.map((list) => (
        <NavLink key={list.uid} style={({ isActive }) => {
          return {
            display: "block",
            borderRadius: "0 10px 10px 0",
            color: "#555",
            backgroundColor: isActive ? "red" : "blue"
          };
        }} to={`/${list.uid}`} >
          <List list={list}
            deleteList={deleteList}>
          </List>
        </NavLink>
      ))}
    </ul >
  );
}

import React from "react";
import Auth from "./Auth";
import history from "../history";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 onClick={() => history.push("/boards")} className="logo">
        Task Board
      </h1>
      <Auth />
    </div>
  );
}

import React from "react";
import "./custome.css";
export default function Style(props) {
  return (
    <div className="header">
      <h1>hello world</h1>
      <h1 className={`${props.data === "apply" ? "h1" : "h2"}`}>hello world</h1>
    </div>
  );
}

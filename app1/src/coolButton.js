// User.js
import React from "react";

// dummy component as a function (these function components cannot have props)
function CoolButton(props) {
  return <button>{props.text}</button>;
}

export default CoolButton;
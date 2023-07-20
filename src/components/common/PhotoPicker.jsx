import React from "react";
import ReactDOM from "react-dom";

function PhotoPicker({ onChange }) {
  const component = (
    <input type="file" onChange={onChange} hidden id="photo-picker"></input>
  );

  return ReactDOM.createPortal(
    component,
    document.getElementById("photo-picker-portal")
  );
}

export default PhotoPicker;

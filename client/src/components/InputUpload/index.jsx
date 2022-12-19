import React from "react";

import "./inputUpload.scss";
export default function InputUpload({ onChange, label, value, error }) {
  return (
    <div className="input-upload">
      <label>{label}</label>
      <input onChange={onChange} value={value} type="text" />
    </div>
  );
}

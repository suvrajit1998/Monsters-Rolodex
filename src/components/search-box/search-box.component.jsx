import React from "react";

import "./search-box.style.css";

export const Searcbox = ({ placeholder, handlechenge }) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handlechenge}
    />
  </div>
);

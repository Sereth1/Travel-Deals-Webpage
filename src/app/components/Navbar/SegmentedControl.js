// SegmentedControl.js

import { useState } from "react";
import styles from "./SegmentedControl.css";
const SegmentedControl = ({ active, setActive }) => {
  function handleCLick() {
    setActive("excursions");
  }

  return (
    <div className="segmented-control">
      <button
        className={`button ${active === "excursions" ? "active" : ""}`}
        onClick={handleCLick}
      >
        Εκδρομές
      </button>
      <button
        className={`button ${active === "hotels" ? "active" : ""}`}
        onClick={() => setActive("hotels")}
      >
        Ξενοδοχεία
      </button>
    </div>
  );
};

export default SegmentedControl;

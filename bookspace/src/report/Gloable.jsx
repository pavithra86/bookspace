import React from "react";

function Gloable({ filter, setFilter }) {
  return (
    <span>
      Search:
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
}

export default Gloable;

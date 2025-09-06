import React from "react";

export default function Filters({ selected, setSelected }) {
  const categories = ["All", "Bottles", "Bags", "Straws", "Accessories"];

  return (
    <div className="filters">
      <h2>Categories</h2>
      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "active" : ""}
          onClick={() => setSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

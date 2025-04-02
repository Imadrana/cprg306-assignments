import React from "react";

export default function Item({ item, onSelect, onDelete }) {
  return (
    <div
      className="p-4 bg-white shadow-md rounded-lg mb-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
      onClick={() => onSelect(item)}
    >
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Category: {item.category}</p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering onSelect
          onDelete(item);
        }}
        className="text-red-500 hover:text-red-700 text-lg"
        title="Delete item"
      >
        ❌
      </button>
    </div>
  );
}

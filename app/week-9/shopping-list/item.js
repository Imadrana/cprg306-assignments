import React from "react";

export default function Item({ item, onSelect }) {
  return (
    <div 
      className="p-4 bg-white shadow-md rounded-lg mb-2 cursor-pointer hover:bg-gray-100 transition" 
      onClick={() => onSelect(item)}
    >
      <h3 className="font-bold">{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}

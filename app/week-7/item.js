import React from "react";

export default function Item({ item }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-2">
      <h3 className="font-bold">{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}

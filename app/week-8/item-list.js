import React from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="max-w-md mx-auto mt-6">
      {sortedItems.map((item) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </div>
  );
}

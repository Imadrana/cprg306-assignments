"use client";

import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => setItems((prev) => [...prev, item]);

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanName);
  };

  // 🔒 Protect the page
  if (!user) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">⛔ You must be signed in to view your shopping list.</p>
      </div>
    );
  }

  return (
    <div className="flex space-x-6 p-6">
      <div className="w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Shopping List</h1>
          <button
            onClick={firebaseSignOut}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
        </div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

"use client";

import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore
  useEffect(() => {
    if (user) {
      const loadItems = async () => {
        const data = await getItems(user.uid);
        setItems(data);
      };
      loadItems();
    }
  }, [user]);

  // Add item to Firestore
  const handleAddItem = async (item) => {
    const id = await addItem(user.uid, item);
    const newItem = { ...item, id };
    setItems((prev) => [...prev, newItem]);
  };

  // Delete item from Firestore
  const handleDeleteItem = async (item) => {
    await deleteItem(user.uid, item.id);
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  // Select an item to show meal ideas
  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanName);
  };

  // If user is not signed in
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
        <ItemList
          items={items}
          onItemSelect={handleItemSelect}
          onItemDelete={handleDeleteItem}
        />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

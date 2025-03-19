"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

function Page() {
  // Initialize state with data from items.json
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  // Event handler to add a new item to the state
  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  // Event handler to select an item and clean its name
  const handleItemSelect = (item) => {
    const cleanItemName = item.name.split(',')[0].trim().replace(/[^\w\s]/gi, '');
    setSelectedItemName(cleanItemName);
  };

  return (
    <div className="flex space-x-6 p-6">
      {/* Left Side - Shopping List */}
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        {/* Pass the event handler to NewItem */}
        <NewItem onAddItem={handleAddItem} />
        {/* Pass items and selection handler to ItemList */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Right Side - Meal Ideas */}
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

export default Page;

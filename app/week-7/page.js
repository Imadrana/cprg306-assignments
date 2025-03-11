"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

function Page() {
  // Initialize state with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item to the state
  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      {/* Pass the event handler to NewItem */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass the items state to ItemList */}
      <ItemList items={items} />
    </div>
  );
}

export default Page;

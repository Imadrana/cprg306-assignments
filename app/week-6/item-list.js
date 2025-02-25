'use client';
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-lg mx-auto mt-6">
      <h2 className="text-lg font-bold mb-4">Sort By:</h2>
      <div className="flex space-x-2 mb-4">
        <button
          className={`p-2 rounded-md ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSortBy('name')}
        >
          Name
        </button>
        <button
          className={`p-2 rounded-md ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSortBy('category')}
        >
          Category
        </button>
      </div>
      <ul className="space-y-2">
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

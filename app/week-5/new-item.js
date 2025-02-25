'use client';
import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
     
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Item Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="w-full p-2 border rounded" 
          />
        </div>
        <div>
          <label className="block font-medium">Quantity</label>
          <div className="flex items-center space-x-2">
            <button 
              type="button" 
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} 
              className="px-3 py-1 bg-gray-300 rounded"
            >
              -
            </button>
            <input 
              type="text" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value) || 1)} 
              required 
              className="w-12 text-center p-2 border rounded" 
            />
            <button 
              type="button" 
              onClick={() => setQuantity((prev) => prev + 1)} 
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
        </div>
        <div>
          <label className="block font-medium">Category</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="w-full p-2 border rounded"
          >
            {['Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods', 'Canned Goods', 'Dry Goods', 'Beverages', 'Snacks', 'Household', 'Other'].map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

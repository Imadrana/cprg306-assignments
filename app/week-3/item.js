export function Item({ name, quantity, category }) {
    return (
      <li className="border p-3 rounded-lg shadow-md bg-white flex justify-between items-center">
        <span className="font-medium text-lg">{name}</span>
        <span className="text-gray-500">{quantity}x</span>
        <span className="text-blue-600 italic">({category})</span>
      </li>
    );
  }
  
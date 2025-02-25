export default function Item({ name, quantity, category }) {
    return (
      <li className="border p-2 rounded-md shadow-md bg-white">
        <strong>{name}</strong> - {quantity} ({category})
      </li>
    );
  }
  
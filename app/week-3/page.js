import { ItemList } from "./item-list";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}

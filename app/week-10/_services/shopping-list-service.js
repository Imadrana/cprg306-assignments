import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

export async function addItem(userId, item) {
  try {
    console.log("🔧 Trying to add item for user:", userId);
    console.log("📦 Item content:", item);

    const docRef = await addDoc(collection(db, "users", userId, "items"), item);

    console.log("Item successfully added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item to Firestore:", error);
    return null;
  }
}

"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Shopping List App</h1>

      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Sign in with GitHub
        </button>
      ) : (
        <div>
          <p className="mb-2">Welcome, {user.displayName} ({user.email})</p>
          <button
            onClick={firebaseSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded mr-4"
          >
            Sign Out
          </button>
          <Link
            href="/week-9/shopping-list"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Go to Shopping List
          </Link>
        </div>
      )}
    </div>
  );
}

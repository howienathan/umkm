import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Pastikan konfigurasi Firebase sudah benar
import { collection, deleteDoc, doc, onSnapshot, Timestamp } from "firebase/firestore";

function UserAccountTable() {
  const [userAccounts, setUserAccounts] = useState([]);
  const [user] = useState([]);

  const userAccountsCollection = collection(db, "users");

  // Realtime listener dengan onSnapshot
  useEffect(() => {
    const unsubscribe = onSnapshot(userAccountsCollection, (snapshot) => {
      const accounts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserAccounts(accounts);
    });

    return () => unsubscribe(); // Cleanup listener saat komponen di-unmount
  }, []);

  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  const handleViewMore = () => {
    alert("View More clicked! Implement action here.");
    // Bisa diarahkan ke halaman detail user atau pagination
  };

  // const addUser = async () => {
  //   try {
  //     await addDoc(userAccountsCollection, {
  //       email: Email,
  //       created: new Date(),
  //       signedIn: new Date(),
  //     });

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center py-10 mx-[2rem]">
      <div className="w-full max-w-4xl bg-[#1a1a1a] text-yellow-400 rounded-lg shadow-md p-4 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">User Logged Accounts</h1>

        {userAccounts.length === 0 ? (
          <p className="text-center text-yellow-400">No user accounts found.</p>
        ) : (
          <table className="w-full text-left border-collapse border border-yellow-400">
            <thead>
              <tr>
                <th className="border border-yellow-400 p-2">No</th>
                <th className="border border-yellow-400 p-2">Email</th>
                <th className="border border-yellow-400 p-2">Created</th>
                <th className="border border-yellow-400 p-2">Signed In</th>
                <th className="border border-yellow-400 p-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {userAccounts.map((user, index) => (
                <tr key={user.id} className="hover:bg-[#2a2a2a]">
                  <td className="border border-yellow-400 p-2">{index + 1}</td>
                  <td className="border border-yellow-400 p-2">{user.email}</td>
                  <td className="border border-yellow-400 p-2">
                    {user.created?.toDate ? user.created.toDate().toLocaleDateString() : "Unknown"}
                  </td>
                  <td className="border border-yellow-400 p-2">
                    {user.signedIn?.toDate ? user.signedIn.toDate().toLocaleDateString() : "Unknown"}
                  </td>
                  <td className="border border-yellow-400 p-2 text-center">
                    <button onClick={() => handleRemove(user.id)} className="text-red-500 hover:text-red-600">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="text-center mt-4">
          <button
            onClick={handleViewMore}
            className="bg-yellow-400 text-[#1a1a1a] font-bold py-2 px-6 rounded hover:bg-yellow-500"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserAccountTable;

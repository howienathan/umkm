import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Import Firebase configuration
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

function UserAccountTable() {
  const [userAccounts, setUserAccounts] = useState([]);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Nama koleksi di Firebase
  const userAccountsCollection = collection(db, 'userAccounts');

  // Fungsi untuk mendapatkan data user dari Firebase
  const fetchUserAccounts = async () => {
    try {
      setIsLoading(true);
      const snapshot = await getDocs(userAccountsCollection);
      const accounts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserAccounts(accounts);
    } catch (error) {
      console.error('Error fetching user accounts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menambahkan user baru
  const handleAddUser = async () => {
    if (!newUserEmail.trim()) {
      alert('Please enter a valid email address!');
      return;
    }
    try {
      const newUser = {
        email: newUserEmail,
        created: new Date().toLocaleDateString(),
        signedIn: new Date().toLocaleDateString(),
      };
      const docRef = await addDoc(userAccountsCollection, newUser);
      setUserAccounts([...userAccounts, { id: docRef.id, ...newUser }]);
      setNewUserEmail('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Fungsi untuk menghapus user
  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, 'userAccounts', id));
      setUserAccounts(userAccounts.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };

  // Mengambil data saat komponen pertama kali dirender
  useEffect(() => {
    fetchUserAccounts();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center py-10 mx-[2rem]">
      <div className="w-full max-w-4xl bg-[#1a1a1a] text-yellow-400 rounded-lg shadow-md p-4 overflow-x-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">User Logged Accounts</h1>

        {isLoading ? (
          <p className="text-center text-yellow-400">Loading...</p>
        ) : (
          <table className="w-full text-left border-collapse border border-yellow-400">
            <thead>
              <tr>
                <th className="border border-yellow-400 p-2">#</th>
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
                  <td className="border border-yellow-400 p-2">{user.created}</td>
                  <td className="border border-yellow-400 p-2">{user.signedIn}</td>
                  <td className="border border-yellow-400 p-2 text-center">
                    <button
                      onClick={() => handleRemove(user.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="text-center mt-4">
          <input
            type="email"
            placeholder="Enter new user email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="bg-[#1a1a1a] border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg mb-2 w-full"
          />
          <button
            onClick={handleAddUser}
            className="bg-yellow-400 text-[#1a1a1a] font-bold py-2 px-6 rounded hover:bg-yellow-500"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserAccountTable;

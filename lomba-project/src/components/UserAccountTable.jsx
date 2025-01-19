import React from "react";

function UserAccountTable() {
  const userAccounts = [
    { id: 1, name: "anjay@gmail.com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
    { id: 2, name: "anjay@gmail.com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
    { id: 3, name: "anjay@gmail.com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
    { id: 4, name: "anjay@gmail..com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
    { id: 5, name: "anjay@gmail.com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
    { id: 6, name: "anjay@gmail.com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
    { id: 7, name: "anjay@gmail.com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
    { id: 8, name: "anjay@gmail.com", created: "Sept 69, 2069", signedIn: "Sept 69, 2069" },
  ];

  const handleRemove = (id) => {
    console.log("Remove user with id:", id);
    
  };

  return (
    <div className="min-h-screen  flex flex-col items-center py-10">
      <div className="w-full max-w-4xl border border-yellow-400 bg-[#1b1b1b] text-yellow-400 rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">User Logged Account</h1>
        <table className="w-full text-left border-collapse border border-yellow-400">
          <thead>
            <tr>
              <th className="border border-yellow-400 p-2">Name</th>
              <th className="border border-yellow-400 p-2">Created</th>
              <th className="border border-yellow-400 p-2">Signed In</th>
              <th className="border border-yellow-400 p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {userAccounts.map((user, index) => (
              <tr key={user.id} className="hover:bg-[#2a2a2a]">
                <td className="border border-yellow-400 p-2">{index + 1}. {user.name}</td>
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
        <div className="text-center mt-4">
          <button className="bg-yellow-400 text-[#1a1a1a] font-bold py-2 px-6 rounded hover:bg-yellow-500">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserAccountTable;

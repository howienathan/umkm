import React, { useState } from "react";

function EditProfile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className=" text-yellow-400 p-8 rounded-lg border border-yellow-400 shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Account</h1>

        <label className="block mb-2">New Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="New Username"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <label className="block mb-2">New Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="New Email"
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <label className="block mb-2">New Password</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full p-2 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center text-yellow-400"
          >
            {showPassword ? "👀" : "👁️"}
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <button
          type="submit"
          className="w-full bg-yellow-400 text-[#1a1a1a] font-bold py-2 rounded hover:bg-yellow-500"
        >
          Change
        </button>
        <a 
        href=""
          className="w-full bg-yellow-400 text-[#1a1a1a] font-bold py-2 rounded hover:bg-yellow-500"
        >
          Change
        </a>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;

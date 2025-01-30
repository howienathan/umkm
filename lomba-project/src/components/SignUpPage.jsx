import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Simpan data pengguna di Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: user.email,
        role: "user",
        createdAt: new Date(),
        signedIn: new Date(),
      });

      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await registerUser();

    if (result.success) {
      alert("User Registered");
      navigate("/home"); // Langsung arahkan ke halaman Home
    } else {
      setError(result.error || "Registration failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#150000] text-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="mb-1 text-2xl font-bold text-center text-yellow-500">Sign Up</h1>
        <p className="mb-6 text-sm text-center text-gray-400">Daftar sekarang juga</p>

        {error && (
          <div className="p-2 mb-4 text-sm text-red-500 border border-red-500 rounded bg-red-500/10">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 font-semibold text-black transition bg-yellow-500 rounded-md hover:bg-yellow-600 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

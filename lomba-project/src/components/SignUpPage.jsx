import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: user.email,
        role: "user",
        createdAt: new Date(),
        signedIn: new Date(),
      });

      alert("User Registered Successfully");
      navigate("/"); // Redirect ke halaman home setelah sukses
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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

        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 my-3 bg-transparent border border-yellow-400 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 my-3 bg-transparent border border-yellow-400 rounded-md"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 my-3 bg-transparent border border-yellow-400 rounded-md"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 font-semibold text-black bg-yellow-500 rounded-md duration-300 hover:bg-yellow-600 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

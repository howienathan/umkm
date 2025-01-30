import React, { useState } from "react";
import { registerUser } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { setDoc, doc, getFirestore } from "firebase/firestore";
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
  const [email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ name, setName] = useState("");
  const db = getFirestore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

 const registerUser = async (e) => {
  e.preventDefault ();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          email: user.email,
          role: "user", // Role default
          createdAt: new Date()
        });
    
        return { success: true };
      } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: error.message };
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await registerUser(
        formData.name,
        formData.email,
        formData.password
      );
      if (result.success) {
        alert("User Registered");
        navigate("/home"); // Arahkan ke halaman login setelah registrasi
      } else {
        setError(result.error || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#150000] text-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="mb-1 text-2xl font-bold text-center text-yellow-500">
          Sign Up
        </h1>
        <p className="mb-6 text-sm text-center text-gray-400">
          Daftar sekarang juga
        </p>

        {error && (
          <div className="p-2 mb-4 text-sm text-red-500 border border-red-500 rounded bg-red-500/10">
            {error}
          </div>
        )}

        <form>
          <input
          type='name'
          placeholder='name'
          value={name} onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
          type='email'
          placeholder='email'
          value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
          type='password'
          placeholder='password'
          value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
          type="submit"
          disabled={loading}
            className="w-full py-2 font-semibold text-black transition bg-yellow-500 rounded-md hover:bg-yellow-600 disabled:opacity-50"
            onClick={registerUser}
            >
            {loading ? "Loading..." : "Sign up"}
          </button>
        </form>

        
{/* 
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-yellow-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-medium text-yellow-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="relative mb-6">
            <label
              htmlFor="password"
              className="block font-medium text-yellow-500"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 mt-1 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute pt-3 text-gray-400 right-3 hover:text-yellow-500"
            >
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute pt-3 text-gray-400 right-3 hover:text-yellow-500"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223a10.477 10.477 0 011.713-1.928m3.846-1.739c1.288-.356 2.733-.556 4.27-.556 2.52 0 4.848.564 6.607 1.556a10.477 10.477 0 012.824 2.928m-2.09 8.917a10.45 10.45 0 01-3.121 2.444c-1.759.992-4.087 1.556-6.607 1.556-1.537 0-2.982-.2-4.27-.556a10.45 10.45 0 01-3.44-2.272m6.44-5.272a2.5 2.5 0 113.16 3.16"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9.75a2.5 2.5 0 00-3.16-3.16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.53 1.614-1.539 3.058-2.958 4.047M2.458 12a9.975 9.975 0 003.5 4.8M9 21h6"
                    />
                  </svg>
                )}
              </button>
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 font-semibold text-black transition bg-yellow-500 rounded-md hover:bg-yellow-600 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign up"}
          </button>
        </form>*/}
      </div>
    </div>
  );
};

export default SignUpPage;

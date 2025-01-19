import React, { useState } from "react";
import { registerUser } from "../utils/Auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
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

};

const handleChange = async (e) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    role: "user",
    createdAt: new Date(),
  });

  navigate("/login"); // Arahkan ke halaman login setelah registrasi
  console.log("User  Registered Succesfully!");
} catch (error) {
  setError(error.message || "Registration failed");
} finally {
  setLoading(false);
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
        // const user = auth.currentUser;
        // const userDoc = await db.collection("users").doc(user.uid).get();
        // if (userDoc.exists()){
        //   const userData = userDoc.data();
        //   if (userData.role === 'admin') {
        //     navigate('/routeadmin');
        //   } else if (userData.role === 'user') {
        //     navigate('/routeuser');
        //   }
        // }
        alert("User Registered")
        navigate("/login"); // Arahkan ke halaman login setelah registrasi
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
        <h1 className="text-2xl font-bold text-yellow-500 text-center mb-1">
          Sign Up
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          Daftar sekarang juga
        </p>

        {error && (
          <div className="mb-4 p-2 bg-red-500/10 border border-red-500 rounded text-red-500 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-yellow-500 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-yellow-500 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-yellow-500 font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full mt-1 p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute pt-3 right-3 text-gray-400 hover:text-yellow-500"
            >
             <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute pt-3 right-3 text-gray-400 hover:text-yellow-500"
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
            className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
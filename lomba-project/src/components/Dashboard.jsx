import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { getUserData } from "../utils/Auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const result = await getUserData(user.uid);
        if (result.success) {
          setUserData(result.data);
        }
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const setRole = async () => {
    try {
      await db.collection('users').doc(auth.currentUser.uid).update({
        role: 'admin',
      });
      alert('Role berhasil diatur sebagai admin');
    } catch (error) {
      console.error('Error setting role:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150000] flex items-center justify-center">
        <div className="text-yellow-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#150000] text-white">
      {/* Navbar */}
      <nav className="bg-[#1a0000] p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-yellow-500 text-xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Welcome, {userData?.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-[#1a0000] rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-yellow-500 mb-4">
            User Profile
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Name</label>
              <p className="text-white">{userData?.name}</p>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Email</label>
              <p className="text-white">{userData?.email}</p>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Member Since</label>
              <p className="text-white">
                {userData?.createdAt?.toDate().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Statistics Card */}
          <div className="bg-[#1a0000] p-6 rounded-lg shadow-md">
            <h3 className="text-yellow-500 font-semibold mb-2">Statistics</h3>
            <p className="text-gray-300">Your activity summary will appear here</p>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-[#1a0000] p-6 rounded-lg shadow-md">
            <h3 className="text-yellow-500 font-semibold mb-2">Recent Activity</h3>
            <p className="text-gray-300">Your recent activities will appear here</p>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-[#1a0000] p-6 rounded-lg shadow-md">
            <h3 className="text-yellow-500 font-semibold mb-2">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full py-2 bg-yellow-500/10 text-yellow-500 rounded hover:bg-yellow-500/20 transition">
                Edit Profile
              </button>
              <button className="w-full py-2 bg-yellow-500/10 text-yellow-500 rounded hover:bg-yellow-500/20 transition">
                View Settings
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
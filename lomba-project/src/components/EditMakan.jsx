import React, { useState, useEffect, useRef, useCallback } from "react";
import { auth, db, storage } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import Navbar from "./Navbar"; // Import Navbar jika digunakan
import { getUserData } from "../utils/Auth";
// import axios from "axios";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Storage API

const EditMakan = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    type: "",
    title: "",
    description: "",
    price: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);
  const [selectedType, setSelectedType] = useState("All");
  const fileInputRef = useRef(null);
  const menuCollectionRef = collection(db, "menuItems");

    // Fetch Menu Items
    const fetchMenuItems = useCallback(async () => {
      try {
        const data = await getDocs(menuCollectionRef);
        setMenuItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    }, [menuCollectionRef]); // Menyertakan menuCollectionRef jika diperlukan
  
    useEffect(() => {
      fetchMenuItems();
    }, [fetchMenuItems]); 

  // Add Menu Item
  const addMenuItem = async () => {
    const itemData = { ...newItem };
    if (newItem.image) {
      const base64Image = await convertToBase64(newItem.image);
      itemData.image = base64Image;
    }
    await addDoc(menuCollectionRef, itemData);
    setNewItem({ type: "", title: "", description: "", price: "", image: null });
    fileInputRef.current.value = "";
    fetchMenuItems();
  };

  // Update Menu Item
  const updateMenuItem = async () => {
    if (editId) {
      const itemDoc = doc(db, "menuItems", editId);
      const itemData = { ...newItem };
      if (newItem.image) {
        const base64Image = await convertToBase64(newItem.image);
        itemData.image = base64Image;
      }
      await updateDoc(itemDoc, itemData);
      setEditId(null);
      fetchMenuItems();
    }
  };

  // Delete Menu Item
  const deleteMenuItem = async (id) => {
    const itemDoc = doc(db, "menuItems", id);
    await deleteDoc(itemDoc);
    fetchMenuItems();
  };

  // Handle Image Upload
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]); // Ambil data Base64
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file); // Baca file sebagai Base64
    });
  };

  // Filter Items by Type
  const filteredItems =
    selectedType === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === selectedType);

  return (
    <div className="min-h-screen text-white px-8 py-12">
      <div className="justify-self-center mb-8">
        {["All", "Foods", "Drinks"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 mx-2 font-semibold rounded ${
              selectedType === type
                ? "bg-yellow-400 text-black"
                : "border border-yellow-400 hover:bg-yellow-500 duration-300 hover:text-black text-yellow-400"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-black border border-yellow-400 rounded-lg p-4 hover:shadow-lg">
            <img
              src={item.image || "https://via.placeholder.com/150"}
              alt={item.title}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
            <p className="mt-4 font-bold text-yellow-400">{item.price}</p>
            <button onClick={() => setEditId(item.id)} className="text-yellow-400">
              Edit
            </button>
            <button onClick={() => deleteMenuItem(item.id)} className="text-red-400 ml-2">
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Add / Edit Item</h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Type (Foods/Drinks)"
            value={newItem.type}
            onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Title"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Description"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <input
            type="text"
            placeholder="Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-[#2a2a2a] text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.files[0] })}
            className="w-full mb-4"
          />
          <button
            onClick={editId ? updateMenuItem : addMenuItem}
            className="bg-yellow-400 text-[#1a1a1a] font-bold py-2 px-6 rounded hover:bg-yellow-500"
          >
            {editId ? "Update Item" : "Add Item"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMakan;

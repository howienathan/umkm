import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { getUserData } from '../utils/Auth';

const EditMakan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userRole, setUserRole] = useState(null); // Perbaiki nama variabel

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchUserRole = async () => {
      const user = auth.currentUser ;
      if (user) {
        const result = awaitgetUserData(user.uid); // Perbaiki pemanggilan fungsi
        if (result.success) {
          setUserRole(result.data.role);
        }
      }
    };

    fetchUserRole();
  }, []);

  const menuItems = [
    {
      id: 1,
      type: "Foods",
      title: "Bumbu Kacang",
      description: "Nikmati kelezatan bumbu kacang asli kebumen",
      price: "Rp 69.000",
      image: "",
    },
    {
      id: 2,
      type: "Drinks",
      title: "Es Teh Manis",
      description: "Segarkan harimu dengan es teh manis kebumen",
      price: "Rp 15.000",
      image: "",
    },
    {
      id: 3,
      type: "Foods",
      title: "Sate Ayam",
      description: "Lezatnya sate ayam dengan bumbu kacang asli",
      price: "Rp 70.000",
      image: "",
    },
    {
      id: 4,
      type: "Drinks",
      title: "Jus Jeruk",
      description: "Jus jeruk segar alami",
      price: "Rp 20.000",
      image: "",
    },
  ];

  

  const [selectedType, setSelectedType] = useState("All"); 


  const filteredItems =
    selectedType === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === selectedType);
      
  return (
    <div className=" min-h-screen text-white px-8 py-12">

        

       
      <div className=" justify-self-center mb-8">
        <button
          onClick={() => setSelectedType("All")}
          className={`px-4 py-2 mx-2 font-semibold rounded ${
            selectedType === "All"
              ? "bg-yellow-400 text-black"
              : " border border-yellow-400 hover:bg-yellow-500 duration-300 hover:text-black font-bold text-yellow-400"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("Foods")}
          className={`px-4 py-2 mx-2 font-semibold rounded ${
            selectedType === "Foods"
              ? "bg-yellow-400 text-black"
              : " border border-yellow-400 font-bold hover:bg-yellow-500 duration-300 hover:text-black text-yellow-400"
          }`}
        >
          Foods
        </button>
        <button
          onClick={() => setSelectedType("Drinks")}
          className={`px-4 py-2 mx-2 font-semibold rounded ${
            selectedType === "Drinks"
              ? "bg-yellow-400 text-black"
              : " border border-yellow-400 font-bold hover:bg-yellow-500 duration-300 hover:text-black text-yellow-400"
          }`}
        >
          Drinks
        </button>
        
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 pt-[3rem] gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-black border border-yellow-400 rounded-lg p-4  hover:shadow-lg"
          >
            <img
              src="https://img.kurio.network/LLKB4CCxkEN646xXdzVuaLgbk8Q=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/24/04/05/c86c4b68-04e1-4d66-9d85-6903003bb6a8.jpg"
              alt={item.title}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
            <p className="mt-4 font-bold text-yellow-400">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditMakan;

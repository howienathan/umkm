import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { getUserData } from '../utils/Auth';

const ProductCarousel = () => {
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
        <nav
        className={`fixed w-full top-0 left-0 bg-marquezBlack z-50 duration-300 ${
          isScrolled ? 'shadow-[0px_13px_21px_0px_#faf089]' : 'shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold font-jakarta">Warung<b className='text-yellow-400'>Anpas</b></div>
            <div className="hidden md:flex space-x-6">
              <a
                href="/"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Home
              </a>
              <a
                href="#About"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                About
              </a>
              <a
                href="/Menu"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Menu
              </a>
              <a
                href="/Sejarah"
                className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Sejarah
              </a>
              <a
                href="/Login"
                className="hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Login / SignUp
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-marquezBlack ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-2 space-y-2">
            <a
              href="/"
              className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white"
            >
              About
            </a>
            <a
              href="/Menu"
              className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold border-b-white"
            >
              Menu
            </a>
            <a
                href="/Sejarah"
                className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Sejarah
              </a>
              <a
                href="/Login"
                className="block hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold"
              >
                Login / SignUp
              </a>
          </div>
        </div>
      </nav>
      <div className="fixed justify-self-center mb-8">
        <button
          onClick={() => setSelectedType("All")}
          className={`px-4 py-2 mx-2 font-semibold rounded ${
            selectedType === "All"
              ? "bg-yellow-400 text-black"
              : " border border-yellow-400 font-bold text-yellow-400"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("Foods")}
          className={`px-4 py-2 mx-2 font-semibold rounded ${
            selectedType === "Foods"
              ? "bg-yellow-400 text-black"
              : " border border-yellow-400 font-bold text-yellow-400"
          }`}
        >
          Foods
        </button>
        <button
          onClick={() => setSelectedType("Drinks")}
          className={`px-4 py-2 mx-2 font-semibold rounded ${
            selectedType === "Drinks"
              ? "bg-yellow-400 text-black"
              : " border border-yellow-400 font-bold text-yellow-400"
          }`}
        >
          Drinks
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-[3rem] gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-black border border-yellow-400 rounded-lg p-4  hover:shadow-lg"
          >
            <img
              src={item.image}
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

export default ProductCarousel;

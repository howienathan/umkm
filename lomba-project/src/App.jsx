import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductCarousel from './components/ProductCarousel';
import Sejarah from './components/Sejarah';
import Login from './components/login';
import SignUpPage from './components/SignUpPage';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import { auth } from './firebase';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
// import AdminPage from './components/AdminPage';
import './app.css'

// const Navbar = ({ isLoggedIn, handleLogout }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full top-0 left-0 bg-marquezBlack z-50 duration-300 ${
//         isScrolled ? 'shadow-[0px_13px_21px_0px_#faf089]' : 'shadow-none'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="text-xl font-bold font-jakarta">
//             Warung<b className='text-yellow-400'>Anpas</b>
//           </div>
//           <div className="hidden md:flex space-x-6">
//             <a href="/" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//               Home
//             </a>
//             <a href="#About" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//               About
//             </a>
//             <a href="/Menu" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//               Menu
//             </a>
//             <a href="/Sejarah" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//               Sejarah
//             </a>
//             {isLoggedIn ? (
//               <>
//                 <a href="/dashboard" className="hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//                   Dashboard
//                 </a>
//                 <button
//                   onClick={handleLogout}
//                   className="hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <a href="/Login" className="hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold">
//                 Login / SignUp
//               </a>
//             )}
//           </div>
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="focus:outline-none text-white">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden bg-marquezBlack ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-4 py-2 space-y-2">
//           <a href="/" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//             Home
//           </a>
//           <a href="#About" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//             About
//           </a>
//           <a href="/Menu" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//             Menu
//           </a>
//           <a href="/Sejarah" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//             Sejarah
//           </a>
//           {isLoggedIn ? (
//             <>
//               <a href="/dashboard" className="block hover:text-gray-300 hover:scale-105 duration-300 font-jakarta font-semibold">
//                 Dashboard
//               </a>
//               <button
//                 onClick={handleLogout}
//                 className="block w-full text-left hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <a href="/Login" className="block hover:text-yellow-300 text-yellow-400 hover:scale-105 duration-300 font-jakarta font-semibold">
//               Login / SignUp
//             </a>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="scrollbar-hidden text-white">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <Footer />
          </>
        } />
        <Route path="/menu" element={
          <ProtectedRoute requiredRole="admin"> 
            <ProductCarousel />
          </ProtectedRoute>
        }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<ProductCarousel />} />
        <Route path="/sejarah" element={<Sejarah />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
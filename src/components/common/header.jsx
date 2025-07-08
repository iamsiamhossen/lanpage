// import React, { useState } from "react";
// import { FaSearch, FaMoon, FaSun } from "react-icons/fa";
// import { Link } from "react-router-dom"; // Import Link from React Router

// const Header = () => {
//   const [isDarkMode, setDarkMode] = useState(false);
//   const [showMobileSearch, setShowMobileSearch] = useState(false);

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   // Toggle mobile search bar
//   const toggleMobileSearch = () => {
//     setShowMobileSearch(!showMobileSearch);
//   };

//   return (
//     <header className="bg-white shadow-sm border-b-2 border-purple-200">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo with Link to Homepage */}
//         <Link to="/" className="text-2xl font-bold text-purple-600 font-poppins">
//           Carrer Connect
//         </Link>

//         {/* Search Bar (Desktop) */}
//         <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-1/3">
//           <FaSearch className="text-purple-500" /> {/* Purple search icon */}
//           <input
//             type="text"
//             placeholder="Search jobs..."
//             className="ml-2 bg-transparent focus:outline-none w-full text-gray-700"
//           />
//         </div>

//         {/* Right Side: Search Icon (Mobile) and Dark Mode Toggle */}
//         <div className="flex items-center space-x-6">
//           {/* Search Icon (Mobile) */}
//           <button
//             onClick={toggleMobileSearch}
//             className="md:hidden text-purple-500 hover:text-purple-600 transition duration-300"
//           >
//             <FaSearch size={20} />
//           </button>

//           {/* Dark Mode Toggle */}
//           <button
//             onClick={toggleDarkMode}
//             className="text-purple-500 hover:text-purple-600 transition duration-300"
//           >
//             {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search Bar (Hidden by Default) */}
//       {showMobileSearch && (
//         <div className="md:hidden px-4 pb-4">
//           <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
//             <FaSearch className="text-purple-500" /> {/* Purple search icon */}
//             <input
//               type="text"
//               placeholder="Search jobs..."
//               className="ml-2 bg-transparent focus:outline-none w-full text-gray-700"
//             />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
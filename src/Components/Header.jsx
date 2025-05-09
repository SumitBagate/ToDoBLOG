import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header({ isAuth, setIsAuth }) {
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate('/login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div>
      <header className="header flex border-b py-4 px-4 sm:px-10 font-sans min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <Link to="/" className="flex items-center gap-2">
            <h3 className="text-2xl font-bold">Blog</h3>
          </Link>

          <div className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              <li>
                <Link to="/Home" className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/learn" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center ml-auto space-x-6">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Profile Image */}
            {isAuth && (
              <img
                src={auth.currentUser?.photoURL || 'default-profile.png'}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            )}

            {!isAuth ? (
              <Link to="/login" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
                Log in
              </Link>
            ) : (
              <>
                <li>
                  <Link to="/Post" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
                    Post
                  </Link>
                </li>
                <button
                  onClick={signUserOut}
                  className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
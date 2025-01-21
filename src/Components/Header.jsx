import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

// Import Link for navigation

function Header({isAuth,setIsAuth}) {
 let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
     navigate('/login');
    })
    .catch((error) => {
      alert(error.message);
    });
  }

  return (
    <div>
      <header className= " header  flex border-b py-4 px-4 sm:px-10 font-sans min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <Link to="/" className="flex items-center gap-2">
            <h3 className="text-2xl font-bold">Blog</h3>
          </Link>

          <div className=" lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <button className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-black p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <div className=" lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="mb-6 hidden max-lg:block">
                  <Link to="/">
                    <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <Link to="/Home" className="hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]">
                    Home
                  </Link>
                </li>
             
                {/* <li className="max-lg:border-b max-lg:py-3">
                  <Link to="/sale" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
                    Sale
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <Link to="/manage" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
                    Manage
                  </Link>
                </li> */}
              </ul>

              <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto">
                <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                  {/* <Link to="/pricing" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
                    Pricing
                  </Link> */}
                </li>
                <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                  <Link to="/learn" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
               profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

          <div className="flex items-center ml-auto space-x-6">
         {!isAuth ?(<Link to="/login" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
              Log in
            </Link>):( 
              <>
        
              <li >
                  <Link to="/Post" className="hover:text-[#007bff] text-gray-600 block font-bold text-[15px]">
                    Post
                  </Link>
                </li>
                       
            <button onClick={signUserOut} className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
              Logout 
            </button>
          </>
          )
          }
            <button className="px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]">
              Start free trial
            </button>

            <button className="lg:hidden">
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default Header;

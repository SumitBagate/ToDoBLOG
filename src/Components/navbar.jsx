import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import ProfilePage from "./Profile"; 
// Remove './Components' if the file is inside the same folder

export default function Navbar({ isAuth, setIsAuth }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user);
      setLoading(false);
      if (user) {
        setUser(user);  // Set user data when logged in
      } else {
        setUser(null);  // Clear user data when logged out
      }
    });

    return () => unsubscribe();
  }, [setIsAuth]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const navigation = [
    { name: 'Dashboard', to: '/', current: location.pathname === '/' },
    isAuth
      ? { name: 'Post', to: '/post', current: location.pathname === '/post' }
      : { name: 'Login', to: '/login', current: location.pathname === '/login' },
    // { name: 'Projects', to: '/projects', current: location.pathname === '/projects' },
    // { name: 'Calendar', to: '/calendar', current: location.pathname === '/calendar' },
  ];

  if (loading) return null ;

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                <img
                    className="h-11 ,h-8 w-22 rounded-md"  // or try h-8, h-12 depending on how large you want it
                    src="../image.png"
                    alt="KeepStack"
                  />


                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {isAuth && user ? (
  <button
    onClick={() => navigate('/profile', {
      state: {
        user: {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        }
      }
    })
    }  // Pass user as state
    className="rounded-full w-10 h-10 bg-gray-400"
  >
    <img
      src={user.photoURL || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
      alt="Profile"
      className="w-full h-full rounded-full object-cover"
    />
  </button>
) : (
  <Link
    to="/login"
    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
  >
    Login
  </Link>
)}

              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

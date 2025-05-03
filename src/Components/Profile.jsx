import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'; // Adjust path if needed

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="profilePage bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <div className="profileContainer bg-white p-8 rounded-lg shadow-lg w-96 max-w-md">
        <div className="profileImageContainer mb-6 flex justify-center">
          <img
            src={user.photoURL || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
            alt="User Profile"
            className="profileImage w-40 h-40 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>
        <div className="profileDetails text-center">
          <h2 className="userName text-3xl font-semibold text-gray-800 mb-2">{user.displayName || 'User Name'}</h2>
          <p className="userEmail text-lg text-gray-600">{user.email}</p>
          <div className="userBio mt-4 text-gray-500">
            
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

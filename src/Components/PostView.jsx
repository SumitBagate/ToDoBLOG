import React from 'react';
import { useLocation } from 'react-router-dom';
import { db, auth } from './firebase'; // Ensure you import `auth` for user authentication
import{  useNavigate } from 'react-router-dom';

function PostView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, content, author, date,authorId } = location.state || {};
 
  const handleEdit = () => {
    console.log('Edit button clicked');
    // Add your edit logic here
  };
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="postViewPage">
      <div className="postViewContainer">
        <h1 className="postViewTitle">{title}</h1>
        <div className="postViewMeta">
          <p className="postViewAuthor">By: {author || 'Unknown Author'}</p>
          <p className="postViewDate">
            {date?.seconds
              ? new Date(date.seconds * 1000).toLocaleString()
              : 'No date available'}
          </p>
        </div>
        <div
          className="postViewContent"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
              {/* Enable Edit Button Only for the Author */}
        {auth.currentUser?.uid === authorId && (
          <button className="postViewEditButton" onClick={handleEdit}>
            Edit Post
          </button>
          
        )}
        <button className="postViewBackButton" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default PostView;
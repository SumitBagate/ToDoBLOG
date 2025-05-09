import React from 'react';
import { useLocation } from 'react-router-dom';

function PostView() {
  const location = useLocation();
  const { title, content, author, date } = location.state || {};

  return (
    <div className="postViewPage">
      <div className="postViewContainer">
        <h1 className="postViewTitle">{title}</h1>
        <div className="postViewMeta">
          <p className="postViewAuthor">By: {author || 'Unknown Author'}</p>
          <p className="postViewDate">{new Date(date?.seconds * 1000).toLocaleString()}</p>
        </div>
        <div
          className="postViewContent"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}

export default PostView;
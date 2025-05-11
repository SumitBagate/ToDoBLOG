import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { useNavigate } from 'react-router-dom'
import DOMPurify from 'dompurify';

function Feed({ isAuth }) {
  const [postlist, setPostlist] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const navigate = useNavigate(); // Use navigate for routing

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    try {
      await deleteDoc(postDoc);
      setPostlist((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const openPost = (post) => {
    navigate('/post-view', {
      state: {
        title: post.title,
        content: post.content,
        author: post.auther?.name,
        date: post.date,
         authorId: post.auther?.id, 
      },
    });
  };

  return (
    <div className="homePage">
      <div className="gridContainer">
        {postlist.map((post) => (
          <div className="post" key={post.id} onClick={() => openPost(post)}>
              <div className="deletePost">
                {isAuth && post.auther?.id === auth.currentUser?.uid && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering openPost
                      if (window.confirm("Are you sure you want to delete this post?")) {
                        deletePost(post.id);
                      }
                    }}
                  >
                    &#128465;
                  </button>
                )}
              </div>
            <div className="postHeader">
              <div className="title2" onClick={() => openPost(post)}>
                <h2>{post.title}</h2>
              </div>
            </div>
               <div
                  onClick={() => openPost(post)}
                ></div> 
                
           <div className="postFooter">
              <h3>@{post.auther?.name || 'Unknown Author'}</h3>
            <h3>
                {post.date?.toDate? post.date.toDate().toLocaleDateString()
                  : 'No date available'}
              </h3>

                            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
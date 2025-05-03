import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';

function Feed({ isAuth }) {
  const [postlist, setPostlist] = useState([]);
  const postsCollectionRef = collection(db, "posts");

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

  return (
    <div className="homePage">
      {postlist.map((post) => (
        <div className="post" key={post.id}> {/* Fixed warning: added key */}
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              {isAuth && post.auther?.id === auth.currentUser?.uid && (
                <button onClick={() => deletePost(post.id)}>&#128465;</button>
              )}
            </div>
          </div>
          <div
            className="postTextContainer"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <h3>@{post.auther?.name || 'Unknown Author'}</h3>
        </div>
      ))}
    </div>
  );
}

export default Feed;

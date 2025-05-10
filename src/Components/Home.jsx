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
          <div className="post" key={post.id}>
              <div className="deletePost">
                {isAuth && post.auther?.id === auth.currentUser?.uid && (
                  <button onClick={() => deletePost(post.id)}>&#128465;</button>
                )}
              </div>
            <div className="postHeader">
              <div className="title" onClick={() => openPost(post)}>
                <h1>{post.title}</h1>
              </div>
            </div>
               <div
                  // className="postTextContainer"
                  // dangerouslySetInnerHTML={{
                  //   __html: post.content ?DOMPurify.sanitize(
                  //             post.content
                  //             .replace(/(\r\n|\n|\r)/gm, ' ') // Replace line breaks with a space
                  //             .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
                  //           ) .slice(0,120) + '...' : 'No content available',
                  // }}
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
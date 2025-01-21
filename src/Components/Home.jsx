import { getDocs,collection,deleteDoc,doc} from 'firebase/firestore'
import React from 'react'
import { useEffect,useState } from 'react'
import { auth ,db} from './firebase'


function Feed({isAuth}) {

    const[postlist,setPostlist] = useState([]);
    const postsCollectionRef = collection(db,"posts")
    useEffect(() => {
        const getPosts = async () => {
           const data=await getDocs(postsCollectionRef);
           setPostlist(data.docs.map((doc)=>({...doc.data(),id:doc.id})));

            
        };
        getPosts();
    },[]);


    const deletePost = async (id) => {
      const postDoc = doc(db, "posts", id); // Create the document reference
      try {
          await deleteDoc(postDoc); // Pass the document reference to deleteDoc
          setPostlist(postlist.filter((post) => post.id !== id)); // Update state to remove deleted post
      } catch (error) {
          console.error("Error deleting post:", error); // Handle any errors
      }
  };
  
  return (
    <div className="homePage">
      {postlist.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
          
              
              <div className="deletePost">
               { isAuth&& post.auther?.id===auth.currentUser?.uid&&(<button onClick={()=>{deletePost(post.id)}}> &#128465;</button>)}
                  
                    
                 
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.auther?.name || 'Unknown Author'}</h3>
          </div>
        );
      })}
    </div>
  );
}




// return (
//     <div className='homePage'>
//       {postlist.map((post)=>
//       {
//         return <div className='post'>
//           <h1 className='text-4xl'>{post.title}</h1>
//           <p>{post.postText}</p>
          
        
//           <div>
//           { isAuth&& post.auther?.id===auth.currentUser?.uid&&(<button onClick={()=>{deletePost(post.id)}}> &#128465;</button>)}
//             </div> 
          
//             <h3>{post.author?.name || 'Unknown Author'}</h3>
//                </div>
//          })}
//     </div>
//   );
// }

export default Feed;

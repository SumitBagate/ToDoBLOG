import React from 'react'
import { useEffect } from 'react';
import { addDoc } from 'firebase/firestore';
import { auth,db } from './firebase';
import { collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Post({isAuth}) {
 const[title,setTitle] = React.useState('')
 const[post,setPost] = React.useState('');
 const[postText,setPostText] = React.useState('')
 const postsCollectionRef = collection(db,"posts")
 let navigate = useNavigate();
const createPost=async()=>{
await addDoc(postsCollectionRef,{title,postText,auther:{name: auth.currentUser.displayName ,id:auth.currentUser.uid  }}) 
console.log(post)
navigate ('/Home')

};

useEffect
(() => {
    if(!isAuth){
        navigate('/login');
    }
}, [isAuth,navigate]);
  return (
   <div className='createPostPage'>
       <div className='cpContainer'>
            <div className='inputGp '>
                <label >Title</label>
                <input className='text-black font-bold text-shadow'  placeholder='Title... ' onChange={(event)=>{setTitle(event.target.value);}}/ >

            </div>
             
             <div className='inputGp '>
                <label > post</label>
                <input className='text-black font-semibold text-shadow' placeholder='post...' onChange={(event)=>{setPostText(event.target.value);}}/ >
             </div>

             <button  onClick={createPost} className='submitbtn'> Submit</button>
       </div>
   </div>
  );
}

export default Post;

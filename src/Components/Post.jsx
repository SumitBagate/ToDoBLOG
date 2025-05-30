
import { useEffect } from 'react';
import { addDoc } from 'firebase/firestore';
import { auth,db } from './firebase';
import { collection } from 'firebase/firestore';
import {  useNavigate } from 'react-router-dom'; 
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import { serverTimestamp } from 'firebase/firestore';




function Post({isAuth}) {
 const  editor=useRef(null)
 const [content,setContent]=useState('')
 const[title,setTitle] = React.useState('')
 const[post,setPost] = React.useState('');
 const[postText,setPostText] = React.useState('')
 const postsCollectionRef = collection(db,"posts")
const [config, setConfig] = useState({
  readonly: false, // Allow editing
  toolbarButtonSize: 'middle',
  askBeforePasteHTML: false,
  height: '100vh', // Full screen height
  width: '100%', // Full screen width
  showCharsCounter: false, // Hide character counter
  showWordsCounter: false, // Hide word counter
  showXPathInStatusbar: false, // Hide XPath
  showPoweredBy: false, // Hide Jodit branding
});

let navigate = useNavigate();

  // Function to convert HTML content to plain text
  const convertHTMLtoPlainText = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div.textContent || div.innerText || '';
  };


const createPost=async()=>{
await addDoc(postsCollectionRef,{
  title,
  postText,
  content,
  auther:{
    name: auth.currentUser.displayName ,
    id:auth.currentUser.uid,
    },
    // data: new Date(),
     date: serverTimestamp(),
  }) 
console.log(post)
console.log("Post created");

navigate ('/')

};

useEffect
(() => {
    if(!isAuth){
        navigate('/login');
    }
}, [isAuth,navigate]);















return (
  <div className="createPostPage">
    <div className="cpContainer">
      <div className="inputGp">
        <label>Title</label>
        <input
          className="text-black font-bold text-shadow"
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>

      <div className=" editorContainer">
        <label>Post</label>
        <JoditEditor
          ref={editor}
          value={content}
          // config={{
          //   ...config,
          //   showPoweredBy: false, // Ensure branding is hidden
          // }}
          onChange={(newContent) => {
            setContent(newContent);
          }}

        />
      </div>

      <button onClick={createPost} className="submitbtn">
        Submit
      </button>
    </div>
  </div>
);
}

export default Post;

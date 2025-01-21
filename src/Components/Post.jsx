
import { useEffect } from 'react';
import { addDoc } from 'firebase/firestore';
import { auth,db } from './firebase';
import { collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; 
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";




function Post({isAuth}) {
 const  editor=useRef(null)
 const [content,setContent]=useState('')
 const[title,setTitle] = React.useState('')
 const[post,setPost] = React.useState('');
 const[postText,setPostText] = React.useState('')
 const postsCollectionRef = collection(db,"posts")
 const [config, setConfig] = useState({
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    toolbarButtonSize: 'middle',
    askBeforePasteHTML: 'False',
  });

let navigate = useNavigate();

  // Function to convert HTML content to plain text
  const convertHTMLtoPlainText = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    return div.textContent || div.innerText || '';
  };


const createPost=async()=>{
await addDoc(postsCollectionRef,{title,postText,content,auther:{name: auth.currentUser.displayName ,id:auth.currentUser.uid  }}) 
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
                {/* <input className='text-black font-semibold text-shadow' placeholder='post...' onChange={(event)=>{setPostText(event.target.value);}}/ > */}
            <JoditEditor
             ref={editor}
            value={content} 
            
            
            onChange={newContent => {setContent(newContent);}}
         
            />
             </div>

             <button  onClick={createPost} className='submitbtn'> Submit</button>
       </div>
   </div>
  );
}

export default Post;

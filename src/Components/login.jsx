import React from 'react'
import{auth, provider} from './firebase'
import{signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

function Login({setIsAuth})
{
    let navigate = useNavigate();
    const signInwithgoogle = () => {

        signInWithPopup(auth,provider)
        .then((result) => {
            localStorage.setItem("isAuth",true)
             setIsAuth(true)
             navigate("/Home")
            // console.log(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    };



  return (
    <div className='loginPage'>
        <div>
            <p>Sign in with google</p>
            <button 
            className="login-btn" onClick={signInwithgoogle}>login-with-google-to-continue</button>
        </div>
      
    </div>
  )
}

export default Login

import React from 'react';
import { auth, provider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = ({ setIsAuth }) => {
    
    let navigate = useNavigate();
    const signInWithGoogle =() =>{
        signInWithPopup(auth, provider).then((result)=> {
            localStorage.setItem("IsAuth",true);
            setIsAuth(true)
            navigate("/")
        }) 
    }
  return (
    <div className='login'>
        <div className='container'>
        <p>Sign in With Google to Continue</p>
        <button className='login-btn' onClick={signInWithGoogle} >Sign in With Google</button>
        </div>
      
    </div>
  )
}

export default Login;
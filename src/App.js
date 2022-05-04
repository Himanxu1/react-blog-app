import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import React, {useState} from 'react';
import MainHeader from './Components/MainHeader';
import {signOut} from 'firebase/auth'
import { auth } from './Firebase'


function App() {
  const [ isAuth, setIsAuth ] = useState(localStorage.getItem("isAuth"));
  
  const signUserOut =() =>{
    signOut(auth).then(() =>{
      localStorage.clear();
      setIsAuth(false)
      window.location.pathname = "/login";
  
    })
  
  }

  return (
  <div>
   <MainHeader isAuth={ isAuth} signUserOut={signUserOut}/>

    <Routes>
      <Route path='/' element={<Home isAuth={isAuth} />} />
      <Route path= '/login' element={<Login setIsAuth={setIsAuth}/>} />
      <Route path='/post' element={<CreatePost isAuth={isAuth}/>}/>
    </Routes>
  </div>
     
  );
}

export default App;


import React, { useState , useEffect } from 'react';
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import {db ,auth} from '../Firebase';
import { useNavigate } from 'react-router-dom';


const CreatePost = ({ isAuth }) => {

    const [title,setTitle] = useState("");
    const [postText, setPostText] = useState("");


    const postsCollectionRef = collection(db,"posts")
    let navigate = useNavigate();

    const createPost = async () =>{
   
        await addDoc(postsCollectionRef,{title, postText, author:{name:auth.currentUser.displayName , id:auth.currentUser.uid }});

        navigate("/")

    }
    useEffect(() =>{
        if(!isAuth){
            navigate("/login")
        }
    },[])

  return (
    <div className='createPost'>
      <div className='cpcontainer'>
          <h1>Create A Post</h1>
          <div className='inputgp'>
              <label>Title:</label>
              <br/>
              <input placeholder='Title...'  onChange={(e) => setTitle(e.target.value) }/>
          </div>
          <div className='inputgp'>
          <label>Post:</label>
          <br/>
          <textarea  placeholder='Post...'   onChange={(e) => setPostText(e.target.value) }/>
          </div>
          <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {auth, db} from '../Firebase';
import './Home.css';

const Home = ({ isAuth }) => {

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts")

    useEffect(()=>{
        const getPosts = async () =>{
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPosts();
    })

    const deletePost = async (id) =>{
      const postDoc = doc(db,"posts",id);
       await deleteDoc(postDoc)
    }
    
  return (
    <div className='homepage'>
      {postLists.map((post) => {
        return (
        <div className='post'>
          <div className='post-header'>
            <div className='title'>
              <h1>{post.title}</h1>
              </div>
              <div className='deletepost'>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button className="btn" 
                    onClick={() => {deletePost(post.id)}}
                  >X</button>
                )}
                
              </div>
          </div>
          <div className='postTextCon'>{post.postText}</div>
          <h3  className='author'>@{post.author.name}</h3>
        </div>
        )
      })}
    </div>
  )
}

export default Home;
import './Top.css'
import Header from '../header/Header'
import axios from "axios";
import React, { useState, useEffect } from 'react'

function Top () {
  
  const baseURL = "https://api.igdb.com/v4/games/";
  const [post, setPost] = useState(null);
  
  // useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // function createPost() {
  //   axios
  //     .post(baseURL, {
  //       title: "Hello World!",
  //       body: "This is a new post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // if (!post) return "No post!"
  

  return(
            <div>
              <Header/>
              <div className='categoria'>
                <h1>Top 100</h1>

                {/* <h1>{post.image}</h1> */}
               
              
              </div>
            </div>
        
    ); 
}

export default Top;
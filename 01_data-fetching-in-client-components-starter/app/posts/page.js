"use client";

import { useEffect, useState } from "react";

const Posts = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {

    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = await response.json();
      console.log(data)
      setPosts(data); 
    }
    console.log(post);
    fetchPosts();
    // return(

    // )

  }, []);

  return (
    <>
      <h1>Posts</h1>
    </>
  );
};

export default Posts;

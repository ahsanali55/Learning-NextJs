"use client";

import { useState } from "react";

export default function Likes() {
  const [likeCount, setlikeCount] = useState(0);
  console.log(likeCount);
  if (typeof window !== "undefined") {
    console.log(window);
    console.log(localStorage);
  }
  console.log("Likes Component Rendered");

  return (
    <div
      onClick={() => {
        setlikeCount(prev => prev + 1);
        console.log("Like button clicked");
      }}
    >
      {likeCount}k likes {String(console.log("running on the server"))}
    </div>
  );
}

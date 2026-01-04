"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  
  return (
    <div>
      <p>Something went wrong at client side!</p>
      <button
        onClick={() => {
            reset();   
          
        }}
      >
        Try Again
      </button>
    </div>
  );
}

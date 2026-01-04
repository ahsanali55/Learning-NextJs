"use client";

import "./global-error.js"
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function GlobalError() {


  return (
    <>
    <html lang="en" className="dark">
      <body>
     
          <p>Something went wrong at root layout.</p>
          <button
            onClick={() => {
                window.location.reload()
            }}
            >
            Try Again
          </button>
              
        </body>
      </html>
    </>
  );
}

'use client';
export default  function Comments() {
  // Hydration issue example: Mis match html between server and client
  // 1: The main purpose of this component is to demontrate a hydration issue that occurs when there is a mismatch between the HTML rendered on the server and the HTML rendered on the client.
  // if (typeof window === "undefined"){
  // return <div> Comments component should not be rendered on the server</div>  
  // }
  console.log("Comments Component Rendered");
  return <div> 500 comments</div>;
}

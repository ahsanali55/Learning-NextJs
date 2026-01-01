const Blog = async ({ params }) => {
  const { blogID } = await params;
  
  // static error
  // if ( (blogID % 2) === 0) {
  //   throw new Error('Page can only be and odd number')
  
  // }

  // unpredictable error or dynamic error or random error or 
  const randomNumber = Math.random();
  console.log(randomNumber)
  if (randomNumber > 0.5) {
    throw new Error("Error occured at page.js inside the blogID")
  }


  return (
    <>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;


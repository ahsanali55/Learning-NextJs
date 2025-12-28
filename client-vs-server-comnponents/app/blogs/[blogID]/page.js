
export const dynamicParams = false;


// ISR: Incremental Static Regeneration
// export const revalidate = 5; // seconds

// Static Site Generation (SSG)
// export async function generateStaticParams() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data)

//     return data.map(({id}) => (
//         {blogID: `${id}`}
//     ))
// }

export default async function blogPage({ params }) {
  const { blogID } = params; // ✅ correct
  console.log("Dynamic blog page:", blogID);

  return (
    <div>
        <h1>Welcome to the Blog Page</h1>
        <h2>Date: {new Date().toString()}</h2>
        <p>Individual Blog Page {blogID }</p>
    </div>
  )
}

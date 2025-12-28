
export const dynamicParams = false;

export async function generateStaticParams() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data)

    return data.map(({id}) => (
        {blogID: `${id}`}
    ))


    // return [
    //     {blog: '1'},
    //     {blog: '2'},
    //     {blog: '3'},
    //     {blog: '4'},
    //     {blog: '5'},
    // ]
}


export default async function blogPage({ params }) {
    const a = await params;
    console.log("Dynamic blog page ", a)
  return (
    <div>
        Individual Blog Page { a.blogID }
    </div>
  )
}

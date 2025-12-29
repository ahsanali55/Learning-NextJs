import next from "next";
import { revalidatePath } from "next/cache";

const Posts = async () => {

      const res = await fetch("https://procodrr.vercel.app/?sleep=5000");
      const data = await res.json();
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const todos = await response.json();
      console.log(todos)
      console.log(fetch.constructor);
  
  return (
    <>
    <h1>Posts</h1>
      <div className="todos-container">
        {
          todos.map(({id, title, body, completed}) => {
            return (
              <div className="todo-item" key={id}>
                <input type="checkbox" checked={completed} readOnly />
                <p>{title}</p>
              </div>
            )
          })
        }
        </div>
    </>
  );
};

export default Posts;

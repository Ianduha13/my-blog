import Navbar from "@/components/Navbar";
import { getAllBlogs } from "./actions/getAllBlogs";

export default async function Home() {
  const blogs = await getAllBlogs();
  console.log(blogs)

  if (!blogs) {
    return <div>There was an error</div>
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background pb-24">
      {blogs.map((blog) => (
        <div key={blog.id} className="flex flex-col items-center justify-center">
          <h1>{blog.title}</h1>
          <p>{blog.created_at}</p>
        </div>
      ))}
    </main>
  );
}

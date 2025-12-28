import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import LoadingSpinner from "@/components/LoadingSpinner";
import Views from "@/components/View";
import Link from "next/link";
import { Suspense } from "react";

export default function Blogs() {
  console.log("Blogs Page Rendered");
  return (
    <div>
      Blog Pages
      <p>Here are all the blog posts.</p>
      <Link href="/blogs/1">View Dynamic Blogs Page 1</Link> <br />
      <Link href="/blogs/2">View Dynamic Blogs Page 2</Link> <br />
      <Link href="/blogs/3">View Dynamic Blogs Page 3</Link> <br />
      <Link href="/blogs/4">View Dynamic Blogs Page 4</Link> <br />
      <br />
      <div>
        <Suspense fallback={<LoadingSpinner children={"views"} />}>
          <Views />
        </Suspense>
        <Suspense fallback={<LoadingSpinner children={"likes"} />}>
          <Likes />
        </Suspense>
        <Suspense fallback={<LoadingSpinner children={"comments"} />}>
          <Comments />
        </Suspense>
      </div>
    </div>
  );
}

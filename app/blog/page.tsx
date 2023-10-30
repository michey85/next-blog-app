import NewPostForm from "@/components/NewPostForm";
import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export const revalidate = 10;

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <h1>Blog page</h1>
      <Link href="/blog/new">Add new post</Link>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <NewPostForm
        onSuccess={async () => {
          "use server";
          revalidatePath("/blog");
        }}
      />
    </>
  );
}

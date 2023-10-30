import { getAllPosts, getPostById } from "@/services/getPosts";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPostById(id);

  return {
    title: post.title,
  };
}

async function removePost(id: string) {
  "use server";
  await fetch(`http://localhost:3300/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/blog");
  redirect("/blog");
}

export default async function Post({ params: { id } }: Props) {
  const post = await getPostById(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <form action={removePost.bind(null, id)}>
        <input type="submit" value="delete post" />
      </form>

      <Link href={`/blog/${id}/edit`}>Edit</Link>
    </>
  );
}

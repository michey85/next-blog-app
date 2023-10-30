import { getPostById } from "@/services/getPosts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function updatePost(data: FormData) {
  "use server";

  const { title, body, id } = Object.fromEntries(data);

  const response = await fetch(`http://localhost:3300/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const post = await response.json();

  revalidatePath(`/blog/${post.id}`);
  redirect(`/blog/${post.id}`);
}

export default async function Profile({ params: { id } }: Props) {
  const post = await getPostById(id);

  return (
    <div>
      <h1>Profile of {post.title}</h1>

      <form className="form" action={updatePost}>
        <input
          type="text"
          placeholder="title"
          required
          name="title"
          defaultValue={post.title}
        />
        <textarea
          placeholder="content"
          required
          name="body"
          defaultValue={post.body}
        />
        <input type="hidden" name="id" value={post.id} />
        <div>
          <input type="submit" value="Update post" />
        </div>
      </form>
    </div>
  );
}

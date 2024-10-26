import { redirect } from "next/navigation";

export default function NewPostForm({
  onSuccess,
}: {
  onSuccess: (id?: number) => Promise<void>;
}) {
  async function createPost(data: FormData) {
    "use server";

    const { title, body } = Object.fromEntries(data);

    const response = await fetch("http://localhost:3300/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, userId: 1 }),
    });

    const post = await response.json();

    await onSuccess(post.id);
  }

  return (
    <form className="form" action={createPost}>
      <input type="text" placeholder="title" required name="title" />
      <textarea placeholder="content" required name="body" />
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}

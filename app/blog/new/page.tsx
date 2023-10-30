import NewPostForm from "@/components/NewPostForm";
import { redirect } from "next/navigation";

export default function NewPost() {
  return (
    <div>
      <h1>Create new post</h1>

      <NewPostForm
        onSuccess={async (id) => {
          "use server";
          redirect(`/blog/${id}`);
        }}
      />
    </div>
  );
}

export default function NewPostForm() {
  return (
    <form className="form">
      <input type="text" placeholder="title" required name="title" />
      <textarea placeholder="content" required name="body" />
      <div>
        <input type="submit" value="Add post" />
      </div>
    </form>
  );
}

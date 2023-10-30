export const getAllPosts = async () => {
  const response = await fetch("http://localhost:3300/posts");

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostById = async (id: string) => {
  const response = await fetch(
    `http://localhost:3300/posts/${id}`,
    { headers: { 'Content-type': 'application/json' } }
  );

  if (!response.ok) throw new Error("Unable to fetch post.");

  return response.json();
}

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `/api/posts?q=${search}`
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

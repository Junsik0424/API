import api from "../api";

interface PostType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const createPost = async (newPost: Omit<PostType, "id">) => {
  const response = await api.post<PostType>("/posts", newPost);
  return response.data;
};

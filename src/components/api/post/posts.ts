import api from "../api";

interface PostType {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type GetAllPostsResponse = PostType[];

export const getAllPosts = async () => {
  const response = await api.get<GetAllPostsResponse>("/posts");

  return response.data;
};

export const getAPost = async (postId: string) => {
  //number -> string 바꿈
  const response = await api.get<PostType>(`/posts/${postId}`);

  return response.data;
};

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

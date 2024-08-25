import api from "../api";

interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type GetPostCommentsResponse = CommentType[];

export const getPostComments = async (postId: string) => {
  const response = await api.get<GetPostCommentsResponse>(
    `/posts/${postId}/comments`,
  );
  return response.data;
};

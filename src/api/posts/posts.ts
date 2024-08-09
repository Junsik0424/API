// import api from "../api";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

// type GetAllPostsResponse = Post[]; //type을 객체인 Post로 선언이 안되기에 배열인 Post[]로 오기 때문에 이를 다시 type으로 선언

// export const getAllPosts = async () => {
//   const response = await api.get<GetAllPostsResponse>("/posts");

//   return response.data; //data가 any로 되어 있음
// };

import api from "../api";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export type GetAllPostsResponse = Post[];

export const getAllPosts = async () => {
  const response = await api.get<GetAllPostsResponse>("/posts");

  return response.data;
};

export const getAPost = async (postId: number) => {
  const response = await api.get<Post>(`/posts/${postId}`);

  return response.data;
};

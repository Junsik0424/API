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

export type GetAllPostsResponse = Post[]; //type을 객체인 Post로 선언이 안되기에 배열인 Post[]로 오기 때문에 이를 다시 type으로 선언

export const getAllPosts = async () => {
  const response = await api.get<GetAllPostsResponse>("/posts"); //게시물 한 개, 그래서 타입을 Post[]즉, <GetAllPostsResponse>로
  // await으로 비동기 작업 -> 동기적으로 바꿈, Promise 객체(response)의 상태가 바뀐 후에 작동하도록
  // Promise가 성공 상태 또는 실패 상태로 바뀌기 전까지는 다음 연산을 시작하지 않는 것

  return response.data;
};

// export const getAPost = async (postId: number) => {
//   const response = await api.get<Post>(`/posts/${postId}`); //게시물 한 개, 그래서 타입을 <Post>로

//   return response.data;
// };

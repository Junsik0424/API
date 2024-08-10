//https://api.ziggle.gistory.me/post/
//https://api.ziggle.gistory.me/comment/
//->https://api.ziggle.gistory.me/는 반복

import axios from "axios";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export default api;

// **jsonplaceholder에서 가능한 것들**
// 게시글 하나 불러오기
// 모든 게시글 불러오기
// 게시글 생성하기
// 게시글 업데이트하기 (한 게시글의 모든 내용을 통째로 다시 수정하는 API) -- PUT
// 게시글 수정하기 (게시글 제목/내용 이런 것들 하나의 속성만 수정하는 API) -- PATCH

// 게시글 필터링해서 가져오기

// 게시글 댓글 가져오기

// 유저 앨범 가져오기
// 앨범 안의 사진들 가져오기
// 유저 TODO 가져오기
// 유저 게시글 가져오기

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getPostComments } from "src/components/api/post/comments";
import { getAPost } from "src/components/api/post/posts";
import styled from "styled-components";

const EntireDiv = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
`;

const TitleDiv = styled.div`
  padding: 30px;
  font-size: 30px;
  font-weight: bold;
`;

const BodyDiv = styled.div`
  padding: 20px;
  font-size: 25px;
`;

const CommentDiv = styled.div`
  padding: 30px 30px 10px;
  font-size: 25px;
  font-weight: bold;
`;

const StyledLi = styled.li`
  margin-bottom: 5px;
`;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // 포스트 데이터를 가져오는 useQuery 훅
  const {
    data: post,
    isLoading: postLoading,
    error: postError,
  } = useQuery<Post, Error>({
    queryKey: ["post", id],
    queryFn: () => getAPost(id!),
    enabled: !!id, // id가 존재할 때만 쿼리 실행
  });

  // 댓글 데이터를 가져오는 useQuery 훅
  const {
    data: comments = [],
    isLoading: commentsLoading,
    error: commentsError,
  } = useQuery<Comment[], Error>({
    queryKey: ["comments", id],
    queryFn: () => getPostComments(id!),
    enabled: !!id, // id가 존재할 때만 쿼리 실행
  });

  if (postLoading || commentsLoading) return <div>로딩 중...</div>;

  if (postError) {
    return (
      <div>포스트를 불러오는 중 오류가 발생했습니다: {postError.message}</div>
    );
  }

  if (commentsError) {
    return (
      <div>댓글을 불러오는 중 오류가 발생했습니다: {commentsError.message}</div>
    );
  }

  return (
    <EntireDiv>
      <TitleDiv>제목: {post?.title}</TitleDiv>
      <BodyDiv>{post?.body}</BodyDiv>
      <CommentDiv>댓글</CommentDiv>
      <ul>
        {comments.map((comment) => (
          <StyledLi key={comment.id}>
            <strong>이름: {comment.name}</strong> <br />
            내용: {comment.body}
          </StyledLi>
        ))}
      </ul>
    </EntireDiv>
  );
};

export default PostDetail;

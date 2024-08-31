import React, { useState } from "react";
import { createPost } from "src/components/api/post/posts";
import styled from "styled-components";

const EntireDiv = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
`;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(1); // 기본 사용자 ID를 상태로 관리 : 1로 임의로 정했음
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      userId,
    };

    try {
      const createdPost = await createPost(newPost);
      setMessage(`Post created successfully with ID: ${createdPost.id}`);
      setTitle("");
      setBody("");
      setUserId(1); // 사용자 ID를 초기값으로 재설정
    } catch (error) {
      console.error("Error creating post:", error);
      setMessage("Failed to create post");
    }
  };

  return (
    <EntireDiv>
      <h1>새 게시물 생성하기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <text>User ID:</text>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <text>제목:</text>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <text>내용:</text>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">게시하기</button>
      </form>
      {message && <p>{message}</p>}
    </EntireDiv>
  );
};

export default CreatePost;

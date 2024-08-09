import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "src/api/posts/posts.ts";
import styled from "styled-components";

const EntireDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  height: 100%;
  background-color: #e1e0e0;
  padding-left: 30px;
  padding-top: 30px;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

const GapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 400px;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TitleDiv = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #2b2a2a;
`;

const BodyDiv = styled.div`
  color: black;
  padding-left: 10px;
`;

const HomePage = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getAllPosts"], // queryKey가 같으면 느리게 캐싱함.
    queryFn: getAllPosts,
  });

  return (
    <EntireDiv>
      <div>
        {isLoading && <div>Loading...</div>}
        <GapDiv>
          {data?.map((post) => (
            <CardDiv key={post.id}>
              <GapDiv>
                <TitleDiv>{post.title}</TitleDiv>
                <BodyDiv>{post.body}</BodyDiv>
              </GapDiv>
            </CardDiv>
          ))}
        </GapDiv>

        <button onClick={() => refetch}>Refetch</button>
      </div>
    </EntireDiv>
  );
};

export default HomePage;

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
    //useQuery 훅을 이용함, useQuery는 "데이터 페칭, 캐싱, 상태 관리, 자동 갱신:을 함
    //useQuery에는 "isLoading, isError, data, error, isFetching, refetch"과 같이 다양한 상태를 제공함
    queryKey: ["getAllPosts"], // query: 데이터를 서버에서 가져오는 요청, queryKey를 이용해 같은 요청(queryKey가 같음)이 들어오면 느리게 캐싱함
    //캐싱: 가져온 데이터를 캐시에 저장해, 동일한 query에 대해 다시 요청할 때 네트워크 요청을 줄이는 것
    queryFn: getAllPosts, //데이터를 가져오기 위한 함수, 서버에서 데이터를 비동기로 가져오는 역할
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

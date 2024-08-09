import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "src/api/posts/posts.ts";

const HomePage = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getAllPosts"], // queryKey가 같으면 느리게 캐싱함.
    queryFn: getAllPosts,
  });

  return (
    <>
      <div>
        {isLoading && <div>로딩중임 ㅡㅡ</div>}
        {data?.map((post) => (
          <li key={post.id}>
            <ul>{post.title}</ul>
            <ul>{post.body}</ul>
          </li>
        ))}

        <button onClick={() => refetch}></button>
      </div>
    </>
  );
};

export default HomePage;

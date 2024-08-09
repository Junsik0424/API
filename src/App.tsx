//useEffect로 getPosts를 실행, useEffect는 웹 실행할 때 바로 실행되기 때문
//useState와 useEffect를 사용하지 않기 위해 react-query를 사용

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import HomePage from "./pages/page";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
};

export default App;

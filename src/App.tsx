// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import HomePage from "./components/pages/homepage";
// import PostPage from "./components/pages/postpage";

// const queryClient = new QueryClient();

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <QueryClientProvider client={queryClient}>
//         <HomePage />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/posts/:id" element={<PostPage />}>
//             <Route path="" />
//           </Route>
//         </Routes>
//       </QueryClientProvider>
//     </BrowserRouter>
//   );
// };

// export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "src/components/pages/CreatePost";
import PostDetail from "src/components/pages/PostDetail";
import PostsList from "src/components/pages/PostsList.tsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/" element={<PostsList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

import "./App.css";
import "./css/style.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import AskPage from "./pages/AskPage";
import ShowPage from "./pages/ShowPage";
import JobPage from "./pages/JobPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => (
  <>
    {/* 원래 의도한 코드는 <Route path="/:type" element={<PostList />} />
      만 사용해서 useParams 를 통해 주소란의 {type}을 읽어 온후 
      <PostList 내부에서 type 에 따라 url을 만들고 data를 가져오는 방식이었는데
      그 방식으로 하자, 두번째 세부 화면으로 갈때  routing 를 하지 못해 
      무식한 반복의 방식으로 변경했습니다. */}
    <Routes>
      <Route path="/profile/:by/*" element={<ProfilePage />} />
      <Route path="/about/*" element={<AboutPage />} />
      <Route path="/job/*" element={<JobPage />} />
      <Route path="/show/*" element={<ShowPage />} />
      <Route path="/ask/*" element={<AskPage />} />
      <Route path="/new/*" element={<NewPage />} />
      <Route path="/top/*" element={<HomePage />} />
      <Route path="/" element={<Navigate replace to="/top" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;

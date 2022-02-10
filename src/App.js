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
import SubmissionList from "./components/SubmissionList";
import SubmissionComment from "./components/SubmissionComment";

const App = () => (
  <>
    <Routes>
      <Route path="/profile/:by/*" element={<ProfilePage />} />
      <Route path="/profile/:by/submissions/*" element={<SubmissionList />} />
      <Route
        path="/profile/:by/submissions/comments/:id/*"
        element={<SubmissionComment />}
      />
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

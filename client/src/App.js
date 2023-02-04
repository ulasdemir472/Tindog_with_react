import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Register2 from "./pages/Register2";
import "./style.scss";
import { Home } from "./pages/Home/Home";
import MatchesContainer from "./components/Matches/MatchesContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerDog" element={<Register2 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/matches" element={<MatchesContainer />} />
    </Routes>
  );
}

export default App;

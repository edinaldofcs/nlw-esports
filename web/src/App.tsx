import { useEffect, useState } from "react";
import { GameProps } from "./components/GameBanner";
import axios from "axios";
import { Home } from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GameAd } from "./pages/GameAd";
import logoImage from "./assets/logo.svg";


function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    axios("http://localhost:5000/games").then((res) => setGames(res.data));
  }, []);

  return (
    <Router>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
      <img src={logoImage} alt="logo" className="max-w-[12rem]" />
      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path="/games/:id/ads/:title" element={<GameAd />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

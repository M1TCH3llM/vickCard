import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Game from "./pages/game";
import Info from "./pages/info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="game" element={<Game />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;

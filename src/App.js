import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Home from "./pages/home/Home";
import JokeDetail from "./pages/jokeDetailt/JokeDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/joke" element={<JokeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

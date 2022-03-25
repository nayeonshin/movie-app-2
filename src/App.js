import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./routes/About";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Detail />} path="/movie/:id"></Route>
        <Route element={<About />} path="/about"></Route>
      </Routes>
    </Router>
  );
}

export default App;

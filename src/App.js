import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Detail />} path="/movie"></Route>
        <Route element={<Home />} path="/"></Route>
      </Routes>
    </Router>
  );
}

export default App;

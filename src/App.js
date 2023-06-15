import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Movies from "./routes/Movies";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Front from "./Front/Front";
import Back from "./Back/Back";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Front />}></Route>
          <Route path="/admin" element={<Back />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

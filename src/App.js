import "./globalStyles.css";
import { Browsing, Details } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browsing />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

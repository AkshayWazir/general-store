import "./globalStyles.css";
import { Browsing, Details, Mobile, Clothes } from "./screens";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Browsing />} />
    </Routes>
  );
}

export default App;

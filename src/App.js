import "./globalStyles.css";
import { Browsing, Details } from "./screens";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browsing />} />
        <Route path="detail" element={<Details />}>
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

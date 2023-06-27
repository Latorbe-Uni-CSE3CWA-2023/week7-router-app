import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<>Home</>}></Route>
      <Route path="/about" element={<>About</>}>
        <Route path="/me" element={<>About Me</>} />
        <Route path="/my-uni" element={<>About My uni</>} />
      </Route>
      <Route path="/profile" element={<>Profile</>} />
      <Route path="/contact" element={<>Contact</>} />
    </Routes>
  );
}

export default App;

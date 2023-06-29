import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import { Container } from "react-bootstrap";
import { NavigationBar } from "./components/navbar/NavigationBar";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

function App() {
  return (
    <Container fluid>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path={"/home"} element={<Homepage />}></Route>
        <Route path="/about" element={<>About</>}>
          <Route path="/about/me" element={<>About Me</>} />
          <Route path="/about/my-uni" element={<>About My uni</>} />
        </Route>
        <Route path="/profile" element={<>Profile</>} />
        <Route path="/profile/:id" element={<Projects />} />
        <Route path="/contact" element={<>Contact</>} />
      </Routes>
    </Container>
  );
}

export default App;

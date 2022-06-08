import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Slider from "./components/slider/Slider";
import { Routes, Route, Link } from "react-router-dom";
import TopMenu from "./components/header/TopMenu.component";
import AppRoutes from "./routes/AppRoutes";
import Modal from "./components/modal/Modal.component";
function App() {
  return (
    <div className="App">
      <Modal></Modal>
    </div>
  );
}

export default App;

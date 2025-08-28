import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div className="text-4xl">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

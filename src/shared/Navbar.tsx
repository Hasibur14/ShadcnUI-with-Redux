import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-200 p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="about">Tasks</Link>
        <Link to="contact">Users</Link>

        <div>
          <ModeToggle></ModeToggle>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { IoMdAdd } from "react-icons/io";
import "./floating-btn.css";
import { Link } from "react-router-dom";
const FloatingButton = ({ to, title }) => {
  return (
    <Link className="floating-btn" to={to}>
      <button title={title ? title : "Add"}>
        <IoMdAdd size={30} />
      </button>
    </Link>
  );
};

export default FloatingButton;

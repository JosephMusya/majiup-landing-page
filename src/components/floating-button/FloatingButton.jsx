import { IoMdAdd } from "react-icons/io";
import "./floating-btn.css";
import { Link } from "react-router-dom";
const FloatingButton = () => {
  return (
    <Link className="floating-btn" to="/add-water-vendors">
      <button title="Add vendor">
        {" "}
        <IoMdAdd size={30} />
      </button>
    </Link>
  );
};

export default FloatingButton;

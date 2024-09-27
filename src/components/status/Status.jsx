import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const Status = ({ status, top, right }) => {
  const Box = ({ icon, status, color }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          backgroundColor: color,
          borderRadius: "4px",
          padding: "4px 8px",
          color: status !== "In Progress" && "#fff",
        }}
      >
        {icon}
        <span>{status}</span>
      </div>
    );
  };
  return (
    <div
      className="status"
      style={{
        position: "absolute",
        right: right ? right : "-4.5%",
        top: top ? top : "-3%",
      }}
    >
      {status === "In Progress" && (
        <Box color="orange" status={status} icon={<FaRegClock color="" />} />
      )}
      {status === "Completed" && (
        <Box color="green" status={status} icon={<FaCheck color="#fff" />} />
      )}
      {status === "Cancelled" && (
        <Box color="red" status={status} icon={<RxCross1 color="#fff" />} />
      )}
    </div>
  );
};

export default Status;

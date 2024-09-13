import "./dash-card.css";

const DashCard = ({ icon, number, description, unit, onClick }) => {
  return (
    <div
      className="dash-card"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <section>
        <h1 className="orders-heading">
          {number.toLocaleString()} {unit}
        </h1>
        <article className="desc">{description}</article>
      </section>
      <div className="icon-container">{icon}</div>
    </div>
  );
};

export default DashCard;

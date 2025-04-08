const PurchaseCard = ({ image, title, price }) => {
  return (
    <div
      style={{
        width: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#472625",
        color: "white",
        padding: "20px",
        gap: "10px",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <div style={{ backgroundColor: "#523231", borderRadius: "10px", height:"110px" }}>
        <img src={image} alt="" style={{ width: "100%" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
export default PurchaseCard;

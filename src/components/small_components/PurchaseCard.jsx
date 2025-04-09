import { Link } from "react-router-dom";

const PurchaseCard = ({ image, title, price, description }) => {
  const dataToSend={
    picture:{
      picture1:image,
      picture2:image,
      picture3:image
    },
    titleAndPrice:{
      title:title,
      price:price
    },
    description:description
  }
  return (
    <Link to="/keyboardView" state={dataToSend} 
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
      <div style={{ backgroundColor: "#523231", borderRadius: "10px", height:"110px", alignItems:"center", display:"flex" }}>
        <img src={image} alt="" style={{ width: "100%" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </Link>
  );
};
export default PurchaseCard;

import { useState } from "react";
import "../App.css";
import { useLocation } from "react-router-dom";
const KeyboardViewPage = () => {
  const { state } = useLocation();
  const { picture, titleAndPrice, description } = state || {};
  const [displayPic, setDisplayPic] = useState(picture.picture1);
  if (!state) {
    return <p>No data found. Please go back and select a product.</p>;
  }
  const handleWriteToCart = (name, price, picture) => {
    const temp = JSON.parse(localStorage.getItem("cart")) || [];
    const itemToAdd = {
      price: price,
      name: name,
      picture: picture,
    };
    temp.push(itemToAdd);
    localStorage.setItem("cart", JSON.stringify(temp));
    window.alert("Added To Cart")
  };
  return (
    <div
      style={{
        backgroundColor: "#893331",
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div
        id="displayContainer"
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            backgroundColor: "#944343",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            padding: "40px",
            gap: "20px",
          }}
        >
          <img src={displayPic} alt="" style={{ width: "80%" }} />
          <div
            id="slidesMenu"
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                opacity: displayPic === picture.picture1 ? "1" : "0.5",
              }}
            >
              <img
                src={picture.picture1}
                alt=""
                onClick={() => setDisplayPic(picture.picture1)}
                style={{ width: "100%", objectFit: "contain", cursor:"pointer" }}
              />
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                opacity: displayPic === picture.picture2 ? "1" : "0.5",
              }}
            >
              <img
                src={picture.picture2}
                alt=""
                onClick={() => setDisplayPic(picture.picture2)}
                style={{ width: "100%", objectFit: "contain", cursor:"pointer" }}
              />
            </div>
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                opacity: displayPic === picture.picture3 ? "1" : "0.5",
              }}
            >
              <img
                src={picture.picture3}
                alt=""
                onClick={() => setDisplayPic(picture.picture3)}
                style={{ width: "100%", objectFit: "contain", cursor:"pointer" }}
              />
            </div>
          </div>
        </div>
        <button
          style={{
            marginTop: "20px",
            border: "none",
            width: "150px",
            height: "50px",
            backgroundColor: "white",
            cursor:"pointer"
          }}
          onClick={() =>
            handleWriteToCart(
              titleAndPrice.title,
              titleAndPrice.price,
              picture.picture1
            )
          }
        >
          Add To Cart
        </button>
      </div>
      <div
        id="descriptionContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: "100px",
        }}
      >
        <p style={{ color: "#fdabea", fontSize: "3rem", fontWeight:"bold" }}>
          {titleAndPrice.title}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "1.75rem",
            marginTop: "30px",
            marginBottom: "40px",
          }}
        >{`${titleAndPrice.price}$`}</p>
        <ul
          style={{
            alignSelf: "flex-start",
            color: "white",
            listStyleType: "disc",
            width:"250px",
          }}
        >
          {description.map((e, i) => {
            return <li key={i} style={{marginBottom:"10px"}}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default KeyboardViewPage;

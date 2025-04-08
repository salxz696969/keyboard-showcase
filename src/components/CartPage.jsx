import { useState } from "react";

const CartPage = ({ keyboardDetail }) => {
  let getQuantity = [];
  for (let i = 0; i < keyboardDetail.length; i++) {
    getQuantity.push(keyboardDetail[i].quantity);
  }
  const [counter, setCounter] = useState(getQuantity);
  const handleClickPlus = (index) => {
    const temp = [...counter];
    temp[index]++;
    setCounter(temp);
  };

  const handleClickMinus = (index) => {
    if (counter[index] === 0) return;
    const temp = [...counter];
    temp[index]--;
    setCounter(temp);
  };
  const calculateTotal=()=>{
    let total=0;
    for(let i=0;i<keyboardDetail.length;i++){
        total+=keyboardDetail[i].price*counter[i];
    }
    return total
  }
return (
    <div
        style={{
        display: "flex",
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "60%",
          marginTop: "8%",
          alignItems: "center",
        }}
      >
        {keyboardDetail.map((e, i) => (
          <div
            key={i}
            style={{
              width: "75%",
              display: "flex",
              padding: "20px",
              alignItems: "center",
              backgroundColor: "#944343",
              borderRadius: "20px",
              textAlign: "center",
              justifyContent: "space-around",
            }}
          >
            <img src={e.picture} alt="" style={{ width: "25%" }} />
            <div>{e.name}</div>
            <div>{`${e.price}$`}</div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button
                style={{
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  justifyContent: "center",
                  borderRadius: "100%",
                }}
                onClick={() => handleClickMinus(i)}
              >
                -
              </button>
              <div>{counter[i]}</div>
              <button
                style={{
                  width: "25px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  justifyContent: "center",
                  borderRadius: "100%",
                }}
                onClick={() => handleClickPlus(i)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          marginTop: "10%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Choose Payment Method</h2>
        <div style={{ display: "flex", gap:"10px" }}>
          <img
            src="/public/khqr-5.png"
            alt=""
            style={{ width: "100px", objectFit:"contain" }}
          />
          <img
            src="/public/master-card-logo-png_seeklogo-89117.png"
            alt=""
            style={{ width: "100px", objectFit:"contain" }}
          />
          <img
            src="/public/visa-logo-png_seeklogo-149684.png"
            alt=""
            style={{ width: "100px" , objectFit:"contain"}}
          />
        </div>
        <h1 style={{marginTop:"100px"}}>{`Total ${calculateTotal().toFixed(2)}$`}</h1>
      </div>
    </div>
  );
};
export default CartPage;

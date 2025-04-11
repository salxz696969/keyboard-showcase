import { useEffect, useState } from "react";

const CartPage = () => {
  const [keyboardDetail, setKeyboardDetail] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const tax = 0.1;
  const handleCheckout = () => {
    localStorage.clear();
    setShowPopup(true);
  };
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setKeyboardDetail(JSON.parse(cartData));
    }
  }, []);
  const [counter, setCounter] = useState([1, 1, 1]);
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
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < keyboardDetail.length; i++) {
      total += keyboardDetail[i].price * counter[i];
    }
    return total;
  };
  if (!keyboardDetail) {
    return <p>No data has been passed in</p>;
  }
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#0e0e0e",
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
          marginTop: "100px",
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
                  backgroundColor: "white",
                  color: "black",
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
                  backgroundColor: "white",
                  color: "black",
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
          display: "flex",
          marginTop: "100px",
          flexDirection: "column",
          marginLeft: "100px",
        }}
      >
        <h1
          style={{
            alignSelf: "center",
            fontSize: "3rem",
            marginBottom: "50px",
          }}
        >
          Card Info
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h1>Subtotal:</h1>
          <h1>{calculateTotal().toFixed(2)}$</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h1>Tax:</h1>
          <h1>{tax * 100}%</h1>
        </div>
        <h1>__________________________________________</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <h1 style={{ fontSize: "2rem" }}>Total:</h1>
          <h1 style={{ fontSize: "2rem" }}>{calculateTotal().toFixed(2)}$</h1>
        </div>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "5px",
            width: "300px",
            alignSelf: "center",
            height: "50px",
            marginTop: "30px",
            cursor: "pointer",
          }}
          onClick={() => handleCheckout()}
        >
          Check Out
        </button>
      </div>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
            animation: "fadeIn 0.3s ease",
          }}
          onClick={() => setShowPopup(false)}
        >
          <img
            src="/public/images/photo_2025-04-11_02-41-39.jpg"
            alt="Popup"
            style={{
              transform: "scale(0.8)",
              animation: "popupScale 0.3s ease forwards",
              height:"500px",
            }}
          />
          <style>
            {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popupScale {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}
          </style>
        </div>
      )}
    </div>
  );
};
export default CartPage;

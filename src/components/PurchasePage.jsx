import keyboardList from "./small_components/keyboardData.json";
import PurchaseCard from "./small_components/PurchaseCard";
import { Link } from 'react-router-dom';

const PurchasePage = () => {
    const keyboardDetail="";
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#0e0e0e",
        display: "flex",
        flexDirection: "column",
      }}
    >
        <Link to="/Cart" state={keyboardDetail} style={{position:"absolute", right:"10px", fontSize:'2rem'}}>🛒</Link>
      <img
        src="https://albashkh.com/cdn/shop/collections/akko-logo-w.png?v=1717283579"
        alt=""
        style={{ width: "100px", marginLeft: "20px" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {keyboardList.Akko.map((e, i) => {
          return (
            <PurchaseCard
              image={{
                picture1:e.picture1,
                picture2:e.picture2,
                picture3:e.picture3
              }}
              price={e.price}
              title={e.name}
              description={e.description}
              key={i}
            />
          );
        })}
      </div>
      <img
        src="https://www.keychron.com/cdn/shop/files/keychron-logo-transparent-1_e481c26f-93a1-4c14-80c9-4d80ad096f3a.png?v=1614760292&width=300"
        alt=""
        style={{
          width: "100px",
          marginLeft: "20px",
          backgroundColor: "white",
          marginTop: "100px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {keyboardList.Keychron.map((e, i) => {
          return (
            <PurchaseCard
              description={e.description}
              image={{
                picture1:e.picture1,
                picture2:e.picture2,
                picture3:e.picture3
              }}
              price={e.price}
              title={e.name}
              key={i}
            />
          );
        })}
      </div>
      <img
        src="https://cdn.worldvectorlogo.com/logos/redragon.svg"
        alt=""
        style={{ width: "100px", marginLeft: "20px", marginTop: "100px" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {keyboardList["Red Dragon"].map((e, i) => {
          return (
            <PurchaseCard
              description={e.description}
              image={{
                picture1:e.picture1,
                picture2:e.picture2,
                picture3:e.picture3
              }}
              price={e.price}
              title={e.name}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PurchasePage;

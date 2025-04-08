import keyboardList from "./small_components/keyboardData.json";
import PurchaseCard from "./small_components/PurchaseCard";

const PurchasePage = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100vw",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
            }}
        >
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
                            image={e.picture}
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

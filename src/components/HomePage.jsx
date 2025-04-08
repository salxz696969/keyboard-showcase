import PurchaseCard from "./small_components/PurchaseCard";

const HomePage = () => {
  const keyboardImg = "../../public/pngwing.com (4).png";
  return (
    <>
      <PurchaseCard
        props={{
          title: "Ronan-K0001",
          description:
            "The legend that defined mechanical keyboards. Iconic buckling spring switches, unmatched tactile feel, and that classic thock. A true piece of typing history.",
          image: keyboardImg,
        }}
      />
      <div>
        <h1>KeebsForKeebs</h1>
        <p>“Explore Keyboards. Feel the Click. Hear the Sound.“</p>
        <a href="">Purchase</a>
        <a href="">Sound Test</a>
        <img src={keyboardImg} alt="" />
      </div>
      <div>
        <h1>RONAN~K0001</h1>
        <a href="">i</a>
        <a href="">i</a>
        <a href="">i</a>
        <a href="">i</a>
        <a href="">i</a>
        <p>
          The legend that defined mechanical keyboards. Iconic buckling spring
          switches, unmatched tactile feel, and that classic thock. A true piece
          of typing history.
        </p>
        <a href="">Purchase</a>
        <a href="">View in 3D</a>
        <img src={keyboardImg} alt="" />
      </div>
      <div>
        <h1>RONAN~K0001</h1>
        <a href="">i</a>
        <a href="">i</a>
        <a href="">i</a>
        <a href="">i</a>
        <a href="">i</a>
        <p>
          The legend that defined mechanical keyboards. Iconic buckling spring
          switches, unmatched tactile feel, and that classic thock. A true piece
          of typing history.
        </p>
        <a href="">Purchase</a>
        <a href="">View in 3D</a>
        <img src={keyboardImg} alt="" />
      </div>
      <a href="">Explore more</a>
    </>
  );
};
export default HomePage;

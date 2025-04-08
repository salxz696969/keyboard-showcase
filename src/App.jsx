import SoundPage from "./components/SoundPage.jsx";
import HomePage from "./components/HomePage";
import { Link, Route, Router } from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import KeyboardViewPage from "./components/KeyboardViewPage";
import CartPage from "./components/CartPage";
import PurchaseCard from "./components/small_components/PurchaseCard";
import PurchasePage from "./components/PurchasePage.jsx";

function App() {
  return (
    <>
      <PurchasePage />
    </>
  );
}

export default App;

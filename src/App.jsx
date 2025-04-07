import SoundPage from "./components/SoundPage.jsx";
import HomePage from "./components/HomePage";
import { Link, Route, Router } from "react-router-dom";
import ExplorePage from "./components/ExplorePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import KeyboardViewPage from "./components/KeyboardViewPage";
import CartPage from "./components/CartPage";

function App() {
  return (
    <>
      <CartPage
        keyboardDetail={[
          {
            picture:"/public/pngwing.com (4) - Copy.png",
            price:99.99,
            name:"Kim Chaewon",
            quantity:2
          },
          {
            picture:"/public/pngwing.com (4) - Copy.png",
            price:99.99,
            name:"Kim Chaewon",
            quantity:2
          },
          {
            picture:"/public/pngwing.com (4) - Copy.png",
            price:99.99,
            name:"Kim Chaewon",
            quantity:3
          },
          {
            picture:"/public/pngwing.com (4) - Copy.png",
            price:99.99,
            name:"Kim Chaewon",
            quantity:5
          },
          {
            picture:"/public/pngwing.com (4) - Copy.png",
            price:99.99,
            name:"Kim Chaewon",
            quantity:9
          }
        ]}
      />
    </>
  );
}

export default App;

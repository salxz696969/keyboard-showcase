import './App.css'
import SoundPage from './components/SoundPage.jsx'
import HomePage from './components/HomePage';
import { Link, Route, Router } from 'react-router-dom';
import ExplorePage from './components/ExplorePage';

function App() {

  return (
    <>
      <SoundPage />
      <footer>
        <p>KeebsForKeebs</p>
        <a href="">Home</a>
        <a href="">Purchase</a>
        <a href="">About us</a>
        <a href="">
          <img src="../../public/Instagram_icon.png" alt="" />
        </a>
        <a href="">
          <img src="../../public/sl_z_072523_61700_01.jpg" alt="" />
        </a>
        <a href="">
          <img src="../../public/LI-In-Bug.png" alt="" />
        </a>
      </footer>
    </>
  )
}

export default App


import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import { useState } from "react"
import { PiButterflyFill } from "react-icons/pi"
import { FaInstagram, FaTiktok } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import {MdOutlineCancel}  from "react-icons/md"
import { Home } from "./component/home"
import { About } from "./component/About"
import { Recipe } from "./component/Recipe"
import "./App.css"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(!showMenu)

  }
  

  return (
    <>
      <Router>
        <div className="one open">
        
          <span className="pan">Healthy Recipe Finder</span>

        
            {/* Hamburger Icon */}
            <div onClick={toggleMenu} className="burger">
              
            {showMenu ? <MdOutlineCancel /> : <GiHamburgerMenu />}
            </div>
          
            {/* Navigation Links */}
            

           <div className={`nav ${showMenu ? "show" : ""}`}>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Recipe">Recipes</NavLink>
          </nav>
          <NavLink to="/Recipe">
            <button>Browse</button>
          </NavLink>
         </div>

          
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Recipe" element={<Recipe />} />
        </Routes>
      </Router>

      <div className="nem">
        <p>made with love</p>
        <div className="f">
          <FaInstagram />
          <PiButterflyFill />
          <FaTiktok />
        </div>
      </div>
    </>
  )
}

export default App



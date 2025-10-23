import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import {MdOutlineManageSearch} from "react-icons/md"
import {BsLightningCharge} from "react-icons/bs"
import {SiSocketdotio} from "react-icons/si"

import './Home.css'



export function Home(){
    return(<div className="header">
    <hr />
<div className="first">
    <h1>Healthy meals, zero fuss</h1>
    <div className="pop">
        <span>
            Discover eight quick, whole food recipes that you can cook tonight,no processed junks, -no guesswork.
        </span>
    </div>
    
  
          <Link to="/Recipe">
      <button>Start exploring</button>
      </Link>

    
    <div className="sec">
     <img src="/images/beautiful-woman-cooking-something-in-the-kitchen.jpg" className="img" alt="" />   
    </div>
    
</div>
<div className="second">

    <p className="p">What you'll get</p>
    <div className="four">
        <div className="third">
        <div className="font">
        <SiSocketdotio />
        </div>
        
            <p className="i">Whole food recipes</p>
            <span className="sp">Each dish uses everyday, unprocessed ingredient</span>
        </div>
        <div className="third">
        <div className="font">
            <BsLightningCharge /> 
        </div>
       
            <p className="i">Minimum fuss</p>
            <span className="sp">All recipes are designed to make eating healthy quick and easy</span>
        </div>
        <div className="third">
        <div className="font">
        <MdOutlineManageSearch />
        </div>
        
            <p className="i">Search in seconds</p>
            <span className="sp">Filiter by name or ingredient and jump straight to the recipe you need</span>
        </div>

    </div>  
</div>

<div className="dis">
    <div className="five">
        <p className="bb">Built for real life</p>
        <span className="a">Coking shouldn't be complicated. These recipes come in under 30 minutes of
        active time, fit busy schedules, and taste good enough to repeat</span>
        <span className="aa">Whether you're new to the kitchen or just need frsh ideas, we've got you covered</span>
    </div>
    <div className="n">
        <img className="image" src="images/cutting 2.jpg" alt="" />
    </div>
</div>

<div className="ready">
    <span className="pp">Ready to cook smart?</span>
    <span className="s">Hit the button, pick a recipe, and get dinner on the table-fast.</span>
     <Link to="/Recipe">
      <button>Browse recipes</button>
      </Link>
  
</div>


    </div>)
}
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import "./About.css"
export function About(){
    return(
        <div className="gene">
        <hr />
        <br />
        <div className="pas">
            <div className="bis">
            <p className="us">About us</p>
                <p className="find">Recipe Finder is designed to make cooking simpler, faster, and more enjoyable.
                 We believe that great meals start with the right inspiration, so we’ve created a platform where you
                 can explore, search, and filter recipes with ease. We believe food is a catalyst for community and well being.  </p>
            </div>
            <div className="nage">
                <img src="/images/handsome-model-holding-red-peppers.jpg" className="photo" />
            </div>
        </div>
        <div className="sis">
        <p className="our">With our intuitive search and filtering features, you can:</p>
            <ul className="lists">
                <li>   Explore recipes with step-by-step instructions and ingredient details</li>
                 

                <li>Find recipes by name or ingredient</li>
                <li>
                Filter by prep or cook time to suit your schedule</li>

                
            </ul>
        </div>
         <div className="sis">
                <p className="our">By sharing approchable
                recipes, we hope to:</p>
                <ul className="lists">
                    <li>Encourage family dinners and social cooking</li>
                    <li>Reduce reliance on single use packaging  and delivery waste</li>
                    <li>Spark curiosity about seasonal produce and local agriculture</li>
                </ul>
            </div>
        
        

        <div className="all">
        <div>
            <div className="res">
           <div className="choice">
            <p className="ss">Respect for time</p>
            <span className="nemss">weekright meal should slot into real schedules weekend cooking can be
            lesuirely but never wasteful</span>
        </div>
        <div className="choice">
            <p className="ss">Sustainable Chioces</p>
            <span className="nemss">Short ingredient lidt cutt down on food wash and carbon footprint. while plant forward 
            dishes keep things planet friendly</span>
        </div>
        </div>
        </div>
           
            <div>
                <img src="/images/family kitchen.jpg" className="dir" alt="" />
            </div>
        </div>
        <div className="reay">
            <p className="read">Ready to cook smarter ?</p>
            <span className="t">Hit the button, pick a recipe and get dinner on the table-last</span>
            
            <Link to="/Recipe">
            <button>Browse recipe</button>
      </Link>
        </div>
        </div>
    )
}
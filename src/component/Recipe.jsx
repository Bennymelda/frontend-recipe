

import axios from "axios";
import { useState, useEffect } from "react";
import { RiContactsFill } from "react-icons/ri";
import { LuAlarmClockCheck } from "react-icons/lu";
import { PiCookingPotThin } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropUpLine } from "react-icons/ri";


import './Recipe.css';

export function Recipe() {
  const [item, setItem] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [showPrep, setShowPrep] = useState(false);
const [showCook, setShowCook] = useState(false);
// state for filters
const [prepTime, setPrepTime] = useState(null);
const [cookTime, setCookTime] = useState(null);
  useEffect(() => {
   // axios.get("http://localhost:5000/recipes")
   axios.get("https://backend-recipe-8nrx.onrender.com/recipes")

      .then((response) => setItem(response.data))
      .catch(err => console.error("Error fetching recipes:", err));
  }, []);

  const handleClick = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClose = () => setSelectedRecipe(null);

const handleSearch = (event) => {
  setSearchTerm(event.target.value.toLowerCase());

  
};

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSearchTerm('')
  }
  
};



// filtering logic
const filteredRecipes = item.filter((i) => {
  const nameMatch = i.name.toLowerCase().includes(searchTerm);
  const ingredientMatch = i.ingredient
    ? i.ingredient.some((ing) => ing.toLowerCase().includes(searchTerm))
    : false;

  // prep filter
  const prepMatch = prepTime ? parseInt(i.prep) <= prepTime : true;

  // cook filter
  const cookMatch = cookTime ? parseInt(i.cook) <= cookTime : true;

  return (nameMatch || ingredientMatch) && prepMatch && cookMatch;
});




  return (
    <div className="ten">
    
      

      <h1 className="h1">Explore our simple, healthy recipes</h1>

      <div className="don">
        <span className="contain">
          Discover eight quick, whole food dishes that fit real-life schedules and taste amazing.
          Use the search bar to find a recipe by name or ingredient, or simply scroll the list and
          let something delicious catch your eye.
        </span>
      </div>

      <div className="head">
        <div className="flex">
          <div>
            <div className="ni" onClick={() => setShowPrep(!showPrep)}>
              <span className="max">Max Prep Time</span>
              
              {showPrep ? <RiArrowDropUpLine className="icon" /> : <RiArrowDropDownLine className="icon" />}
            </div>
            {showPrep && (
            <div className="same">
            {[0,5,10].map((time) =>(
              
              <span key={time} onClick={() => setPrepTime(time)}>
              
              {time} mins
            
              </span>
              
            ))}
              
            </div>
            )}
          </div>

          <div>
            <div className="ni" onClick={() => setShowCook(!showCook)}>
              <span className="max">Max Cook Time</span>
              {showCook ? <RiArrowDropUpLine className="icon" /> : <RiArrowDropDownLine className="icon" />} 
           
            </div>
            {showCook && (
            <div className="sames">
                {[0,5,10,12,15,20].map((time) =>(
              <span key={time} onClick={() => setCookTime(time)}>
              {time} mins
              </span>
            ))}
            </div>
           )}
          </div>
        </div>

        <div className="ion">
          <CiSearch className="ico" />
          <input
            type="text"
            size={25}
            placeholder="Search by name or ingredient..."
            onKeyDown={handleKeyDown}
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
      </div>

      {/* Selected recipe at top */}
      
      {selectedRecipe && (
        <div className="sip">
  <div className="selected-recipe">
  <img src={selectedRecipe.img} className="svg" />
    <p className="ame">{selectedRecipe.name}</p>
    <span className="desc me">{selectedRecipe.desc}</span>
    <div className="spie">
    <div className="b">
    <RiContactsFill />
    <p>Serving: {selectedRecipe.serving}</p>
    </div>     
      <div className="b">
      <LuAlarmClockCheck />
      <p>Prep: {selectedRecipe.prep}</p>
      </div>
      <div className="b">
      <PiCookingPotThin />
      <p>Cook: {selectedRecipe.cook}</p>
      </div>
      
    </div>

    <div>
      <p className="pass">Ingredients:</p>
      <ul>
        {selectedRecipe.ingredient?.map((item, index) => (
          <li key={index} className="list">{item}</li>
        ))}
      </ul>
    </div>

    <div>
      <p className="pass">Instructions:</p>
      <ul>
        {selectedRecipe.instruction?.map((step, index) => (
          <li key={index} className="list">{step}</li>
        ))}
      </ul>
    </div>

    <button onClick={handleClose}>Close</button>
   </div>
  </div>
)}

      <div className="divs">
        {filteredRecipes.map((i) => (
          <div key={i.id} className="no">
            <div className="in">
              <img src={i.img} className="recipe" alt={i.name} />
            </div>

            <p className="name">{i.name}</p>
            <span className="desc">{i.desc}</span>

            <div className="one">
              <div className="b">
                <RiContactsFill />
                <p className="serve">Serving: {i.serving}</p>
              </div>
              <div className="b">
                <LuAlarmClockCheck />
                <p className="prep">Prep: {i.prep}</p>
              </div>
            </div>

            <div className="b">
              <PiCookingPotThin />
              <p className="cook">Cook: {i.cook}</p>
            </div>

            <button className="box" onClick={() => handleClick(i)}>View Recipe</button>
          </div>
        ))}
      </div>
    </div>
  );
}



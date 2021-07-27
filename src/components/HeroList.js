import React, {useState, useEffect } from 'react'
import "./styles/herolist.css"
import Details from "./Details"
export default function HeroList() {

    const [heroData, setHeroData] = useState([])
   const [details, setDetails] = useState(false)
   const [selected, setSelected] = useState([])
    
      useEffect(() => {
        fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        .then(res => {
           return res.json()
           })
        .then(data => {
          setHeroData(data)
      })
      .catch(err => console.log(err))
      
      },[] )


     /*  console.log(heroData[selected].name) */


function toggleSelected(e) {
setSelected( e.currentTarget.parentNode.getAttribute("data-index"))
setDetails(true)
}
console.log(selected)
    return (
        <div className="hero-list">
       {heroData.map((hero, i) => (
           <div className="hero-card" key={i} data-index={i}>
                   <div className="img-container">
        <img src={hero.images.sm} alt="hero"/>
      
             </div>
           <h2 className="hero-title"> {hero.name} </h2>
           <button onClick={toggleSelected} className="details-button">Show Details</button>
<p className="">    </p>
          
                         </div>
       ))}
          {details ? <Details heroData={heroData} selected={selected} setDetails={setDetails} /> : null}
        
        </div>
      
    )
}

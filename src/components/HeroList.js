import React, {useState, useEffect} from 'react'
import "./styles/herolist.css"
import Details from "./Details"
export default function HeroList() {

    const [heroData, setHeroData] = useState([])
   const [details, setDetails] = useState(false)
   const [selected, setSelected] = useState([])
    const [searched, setSearched] = useState("")


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



function toggleSelected(e) {
setSelected( e.currentTarget.parentNode.getAttribute("data-index"))
setDetails(true)
}

function handleChange(e) {
  setSearched(e.target.value)
}

const filteredHeros = heroData.filter(hero => 
  hero.name.toLowerCase().includes(searched.toLowerCase()))


    return (
      <>
      <input placeholder="Search Heros" className="search" onChange={handleChange} type="text"/> 
        <div className="hero-list">
       {filteredHeros.map((hero, i) => (
     <div className="hero-card" key={i} data-index={i}>
           <div className="img-container">
              <img src={hero.images.sm} alt="hero"/>
            </div>
           <h2 className="hero-title"> {hero.name} </h2>
           <button onClick={toggleSelected} className="details-button">Show Details</button>
    </div>
       ))}
          {details ? <Details filteredHeros={filteredHeros} heroData={heroData} selected={selected} setDetails={setDetails} /> : null}
        </div>
      </>
    )
}

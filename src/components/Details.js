import React from "react";
import "./styles/details.css";
export default function Details({ filteredHeros, heroData, selected, setDetails }) {
  function close() {
    setDetails(false);
  }

  const hero = filteredHeros[selected];
  return (
    <div onClick={close} className="closer">
      <section className="detail-popup">
        <div className="detail-card">
          <div className="img-container">
            <img src={hero.images.sm} />
            </div>
            <div />
            <h1> {hero.name} </h1>
            <hr />
            <div className="detail-rows">
              <div>
                <h2>Power Stats</h2>
                <p>Intelligence: {hero.powerstats.intelligence}</p>
                <p>Strength: {hero.powerstats.strength}</p>
                <p>Speed: {hero.powerstats.speed}</p>
                <p>Durability: {hero.powerstats.durability}</p>
                <p>Power: {hero.powerstats.power}</p>
                <p>Combat: {hero.powerstats.combat}</p>
              </div>

              <div>
                <h2>Appearance</h2>
                <p>Gender: {hero.appearance.gender}</p>
                <p>Race: {hero.appearance.race}</p>
                <p>
                  Height: {hero.appearance.height[0]} /{" "}
                  {hero.appearance.height[1]}
                </p>
                <p>
                  Weight: {hero.appearance.weight[0]} /{" "}
                  {hero.appearance.weight[1]}{" "}
                </p>
                <p> Eye Color: {hero.appearance.eyeColor} </p>
                <p>Hair Color: {hero.appearance.hairColor} </p>
              </div>

              <div>
                <h2>Biography</h2>
                <p> Full Name: {hero.biography.fullName}</p>
                <p> Alter Ego : {hero.biography.alterEgos}</p>
                <p> Aliases: {hero.biography.aliases}</p>
                <p>
                  Place of Birth:{" "}
                  {hero.biography.placeOfBirth == "-"
                    ? "Unknown"
                    : hero.biography.placeOfBirth}
                </p>
                <p>First Appearance: {hero.biography.firstAppearance}</p>
                <p>Publisher: {hero.biography.publisher}</p>
                <p>Alignment: {hero.biography.alignment}</p>
              </div>

              <div>
                <h2>Work</h2>
                <p>Occupation: {hero.work.occupation}</p>
                <p>Base: {hero.work.base}</p>
              </div>

              <div>
                <h2>Connections</h2>
                <p>Group Affiliation: {hero.connections.groupAffiliation}</p>
                <p>Relatives: {hero.connections.relatives} </p>
              </div>
            </div>
         
        </div>
      </section>
    </div>
  );
}

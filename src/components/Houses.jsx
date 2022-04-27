import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL, HOUSE_URL } from "../globals";

const Houses = (props) => {
    const [randomNumber, setRandomNumber] = useState(null)
    const [effectLogs, setEffectLogs] = useState([])
  
    useEffect(() => {
        setEffectLogs(prevEffectLogs => [...prevEffectLogs, 'effect fn has been invoked'])
      },
      []
    )
    
  return (
    <div className="houses-container">
        <h2 className="houses-div"> Hogwarts Houses </h2>
        <br></br>
        <img
        className="sorting-hat-img"
          src="https://img.buzzfeed.com/buzzfeed-static/static/2018-11/6/17/asset/buzzfeed-prod-web-03/anigif_sub-buzz-1840-1541543688-1.gif?downsize=700:*&output-format=auto&output-quality=auto"
          atl="sorting-hat-img"
        />

        <div className="random-house-div">
      <h1 className="random-house-h1">{randomNumber}</h1>
      <button className="random-house-btn"
        onClick={() => {
           const randomNum=Math.floor(Math.random() * 4)
        //   console.log(Math.floor(Math.random() * 4));
          console.log(props.houses[randomNum].name);
          const randomHouse = props.houses[randomNum].name
          setRandomNumber(randomHouse)
        }}
      >
        Ask The Sorting Hat Which House You Belong In
      </button>

    </div>





        <br/>

        {props.houses.map((house) => (
          <div key={house.id} className="card">
            <h3>{house.name}</h3>
            <button onClick={() => props.selectHouse(house.id)}>
              Learn More About Your House
            </button>
          </div>
        ))}

    </div>
  );
};

export default Houses;



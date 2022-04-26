import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL, HOUSE_URL } from "../globals";

const Houses = (props) => {
  
  return (
    <div className="houses-container">
        <h2 className="houses-div"> 4 houses of Hogwarts </h2>
        <img
        className="sorting-hat-img"
          src="https://img.buzzfeed.com/buzzfeed-static/static/2018-11/6/17/asset/buzzfeed-prod-web-03/anigif_sub-buzz-1840-1541543688-1.gif?downsize=700:*&output-format=auto&output-quality=auto"
          atl="sorting-hat-img"
        />

        {/* <button>What House Are You?</button> */}

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

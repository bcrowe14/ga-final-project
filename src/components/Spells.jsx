import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL } from "../globals";

const Spells = (props) => {

  //  console.log(response.data[0].name);

  return (
    <div className="spells-div">
      <h2 className="spells-h2"> Practice Random Spell </h2>

      {/* {props.houses.map((house) => (
          <div key={house.id} className="card">
            <h3>{house.name}</h3>
            <button onClick={() => props.selectHouse(house.id)}>
              Learn More About Your House
            </button>
          </div>
        ))} */}

    </div>
  );
};

export default Spells;

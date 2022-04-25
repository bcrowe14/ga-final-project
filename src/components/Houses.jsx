import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL, HOUSE_URL } from "../globals";

const Houses = (props) => {
//   const [houses, setHouses] = useState(null);

//   useEffect(() => {
//     const getHouses = async () => {
//       const response = await axios.get(HOUSE_URL);
//       setHouses(response);
//       // console.log(response.data[random].name);
//     //   console.log(response.data);
//     };
//     getHouses();
//   }, [displayHouses]);
  //  console.log(response.data[0].name);

  return (
    <div className="houses-div">From houses.jsx
      {
        props.houses.map((houses) => (
          <div key={houses.id} className="house-div2">
            {/* <img src={`${POSTER_PATH}${movie.poster_path}`} alt="poster" /> */}
            <h3>{houses.name}</h3>
            <button onClick={() => props.selectHouses(houses.id)}>View House</button>
          </div>  
        ))
      }
    </div>
  );
};

export default Houses;

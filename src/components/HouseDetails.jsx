import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL, HOUSE_URL } from "../globals";

const HouseDetails = (props) => {
    const [houseDetails, setHouseDetails] = useState(null)

    useEffect(() => {
        const getHouseDetails = async () => {
          const response = await axios.get(`${BASE_URL}houses/${props.selectedHouse}`)
          setHouseDetails(response.data)
          console.log(response.data);
          console.log(props.selectedHouse);
        }
        getHouseDetails()
      }, [props.selectedHouse])
    
      return (
        <div>
          {houseDetails ? (
            <div className="details">
              <div className="card">
                {/* <img src={`${POSTER_PATH}${movieDetails.backdrop_path}`} alt="poster"/> */}
                <h2>{houseDetails.name}</h2>
                <p>Element: {houseDetails.element}</p>
                <p>Colors: {houseDetails.houseColours}</p>
                <p>Animal: {houseDetails.animal}</p>
              </div>
              <button onClick={props.goBack}>Go Back</button>
            </div>
          ) : (
            <h3>Arresto Momentum...</h3>
          )}
        </div>
      )
    }
    
    export default HouseDetails
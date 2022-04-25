import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL, HOUSE_URL } from "../globals";

const HouseDetails = (props) => {
    const [houseDetails, setHouseDetails] = useState(null)

    useEffect(() => {
        const getHouseDetails = async () => {
          const response = await axios.get(`${HOUSE_URL}`)
          setHouseDetails(response.data)
          console.log(response.data);
        }
        getHouseDetails()
      }, [props.selectedMovie])
    
      return (
        <div>
          {houseDetails ? (
            <div className="details">
              <div className="card">
                {/* <img src={`${POSTER_PATH}${movieDetails.backdrop_path}`} alt="poster"/> */}
                <h2>{houseDetails.name}</h2>
                <p>{houseDetails.element}</p>
                <p>color: {houseDetails.houseColours}</p>
              </div>
              <button onClick={props.goBack}>Go Back</button>
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      )
    }
    
    export default HouseDetails
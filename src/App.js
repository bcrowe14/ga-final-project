import { useState, useEffect } from "react";
import "./styles/App.css";
import Spells from "./components/Spells"; 
import Houses from "./components/Houses";
import HouseDetails from "./components/HouseDetails";
import axios from "axios";
import { BASE_URL, HOUSE_URL } from "./globals";

function App() {
  const [spells, setSpells] = useState(null);
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  const selectHouse = (id) => {
    setSelectedHouse(id);
  };

  const goBack = () => {
    setSelectedHouse(null);
  };


  useEffect(() => {
    const getHouses = async () => {
      const response = await axios.get(`${HOUSE_URL}`);
      setHouses(response.data);
      console.log(response.data);
    };
    getHouses();
  }, []);


  return (
    <div className="App">
      <h1>Wizzard Stuff</h1>
      {selectedHouse ? (
        <HouseDetails selectedHouse={selectedHouse} goBack={goBack}/>
      ) : (
        <Houses houses={houses} selectHouse={selectHouse} />
      )}

      <br></br><br></br><br></br><br></br>

      {selectedHouse ? null : <Spells />}
    </div>
  );
}

export default App;

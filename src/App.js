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

  const randomBtn = () => {
    const random = Math.floor(Math.random() * 3);
    

  }

  useEffect(() => {
    const getHouses = async () => {
      const response = await axios.get(`${HOUSE_URL}`);
      setHouses(response.data);
      console.log(response.data);
    };
    getHouses();
  }, []);

  // useEffect(() => {
  //   const getSpells = async () => {
  //    const response = await axios.get(BASE_URL)
  //     setSpells(response)
  //     // console.log(response)
  //     console.log(response.data[random].name)
  //   }
  //   getSpells()
  // }, [])

  return (
    <div className="App">
      <h1>Wizzard Stuff</h1>
      {selectedHouse ? (
        <HouseDetails selectedHouse={selectedHouse} goBack={goBack} randomBtn={randomBtn} />
      ) : (
        <Houses houses={houses} selectHouse={selectHouse} />
      )}

      <br></br><br></br><br></br><br></br>

      {selectedHouse ? null : <Spells />}
    </div>
  );
}

export default App;

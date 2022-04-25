import { useState, useEffect } from "react";
import "./styles/App.css";
import Spells from "./components/Spells";
import Houses from "./components/Houses";
import HouseDetails from "./components/HouseDetails";
import axios from "axios";
import { BASE_URL,HOUSE_URL } from "./globals";



function App() {
  const [displaySpells, setDisplaySpells] = useState(null)
  const [houses, setHouses] = useState([])
  const [selectedHouses, setSelectedHouses] = useState(null)

  const selectHouses = (id) => {
    setSelectedHouses(id)
  }

  const goBack = () => {
    setSelectedHouses(null)
  }

  useEffect(()=>{
    const getHouses = async () => {
      const response = await axios.get(`${HOUSE_URL}`)
      setHouses(response.data)
      console.log(response.data);
    }
    getHouses()
  },[])

  // useEffect(() => {
  //   const getSpell = async () => {
  //     const response = await axios.get(BASE_URL)
  //     setSpell(response)
  //     // console.log(response)
  //     console.log(response.data[random].name)
  //   }
  //   getSpell()
  // }, [])




  return (
    <div className="App">
          <h1>Wizzard Stuff</h1>
          {selectedHouses ? (
        <HouseDetails selectedHouses={selectedHouses} goBack={goBack}/>
      ) : (
        <Houses houses={houses} selectHouses={selectHouses} />
      )}

          {/* <Spells />
          <Houses /> */}
        </div>
  );
}

export default App;

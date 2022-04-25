import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL } from "../globals";

const Spells = (props) => {
  const [spells, setSpells] = useState(null);
  let random = Math.floor(Math.random() * 99);

  useEffect(() => {
    const getSpells = async () => {
      const response = await axios.get(SPELLS_URL);
      setSpells(response.data);
      console.log(response.data[random].name);
    };
    getSpells();
  }, [displaySpells]);

    

  return (
    <div className="spells-div">
      <h2 className="spells-h2"> Spells stuff </h2>
      <h2>  </h2>
    </div>
  );
};

export default Spells;
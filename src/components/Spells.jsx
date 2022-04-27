import { useState, useEffect } from "react";
import axios from "axios";
import { SPELLS_URL, BASE_URL } from "../globals";

const Spells = (props) => {
  //  console.log(response.data[0].name);

  return (
    <div className="spells-div">
      <h2 className="spells-h2"> Practice Spells *coming soon* </h2>
      <br></br>
      <img
        className="spells-img"
        src="https://qph.fs.quoracdn.net/main-qimg-790e037260b6fc75606e2d205b7ff38a-pjlq"
        atl="spells-img"
      />
    </div>
  );
};

export default Spells;

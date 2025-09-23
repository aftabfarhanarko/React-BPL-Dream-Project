import React, { use } from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

const AbabolePlayer = ({
  playerDataFeatch,
  setBalences,
  balences,
  clickPlyers,
  setClickPlyers,
  setLocalStorageinClick
}) => {
  const playerUseFatch = use(playerDataFeatch);
  return (
    <div className="max-w-[1100px] mx-auto grid grid-cols-1  md:grid-cols-3 gap-4 ">
      {playerUseFatch.map((player) => (
        <DisplayCard
          player={player}
          setBalences={setBalences}
          balences={balences}
          clickPlyers={clickPlyers}
          setClickPlyers={setClickPlyers}
          setLocalStorageinClick={setLocalStorageinClick}
        ></DisplayCard>
      ))}
    </div>
  );
};

export default AbabolePlayer;

import React, { useState } from "react";
import flages from "../../assets/Group (1).png";
import group from "../../assets/Group.png";

const DisplayCard = ({ player, setBalences, balences }) => {
  const [isSecelate, setIsSecelate] = useState(false);
  return (
    <div className="card bg-base-100  shadow-sm p-5">
      <figure>
        <img
          className="w-full h-[220px] object-cover rounded-lg"
          src={player["player-img"]}
          alt="Shoes"
        />
      </figure>
      <div className="">
        <div className="flex gap-4 items-center mt-3">
          <img className="w-[20px] h-[20px]" src={group}></img>
          <h2 className="card-title">{player["player-name"]}</h2>
        </div>
        <div className="flex justify-between items-center mt-4 border-b  border-gray-300 pb-2">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px]" src={flages}></img>
            <span className="ml-3 text-gray-400">
              {player["player-country"]}
            </span>
          </div>
          <button className="btn">{player["player-role"]}</button>
        </div>
        <div className=" mt-2">
          <div className="flex justify-between items-center">
            <p className="font-bold">Rating</p>
            <p className="font-bold">{player.rating}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">{player["batting-style"]}</p>
            <p className="text-gray-500">{player["bowling-style"]}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold">Price: ${player.price}</p>
            <button
              disabled={isSecelate}
              onClick={() => {
                setIsSecelate(true);
                if (balences < player.price) {
                  alert("Not Avable Balince");
                  return;
                }
                setBalences(balences - player.price);
              }}
              className="btn"
            >
              {isSecelate ? "Secelate" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;

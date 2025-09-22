import React from "react";

const SecleatPlayer = ({
  clickPlyers,
  removedSections,
  sectionsHeandel,
}) => {
  return (
    <div className="max-w-[1100px] mx-auto  ">
      {clickPlyers.map((mys) => (
        <div className="border border-gray-300 flex justify-between items-center mb-3 p-3 px-4 rounded-xl">
          <div className="flex gap-4 items-center">
            <div>
              <img
                className="w-[80px] h-[60px] rounded-lg"
                src={mys["player-img"]}
              ></img>
            </div>
            <div>
              <p className="text-xl font-semibold">{mys["player-name"]}</p>
              <p className="text-[15px] text-gray-400">
                {mys["batting-style"]}
              </p>
            </div>
          </div>
          <div>
            <img
              onClick={() => removedSections(mys)}
              src="https://i.ibb.co.com/v6fNkN2P/Vector.png"
            ></img>
          </div>
        </div>
      ))}
      <button
        onClick={sectionsHeandel}
        className="
            text-black font-semibold py-2 px-6 bg-[#E7FE29]  hover:bg-[#d8ed19]
        rounded-lg shadow-md mt-5"
      >
        Add More Player
      </button>
    </div>
  );
};

export default SecleatPlayer;

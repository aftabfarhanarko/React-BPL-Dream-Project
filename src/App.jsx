import { Suspense, useState } from "react";
import "./App.css";
import AbabolePlayer from "./Componitns/AbabolePlayer/AbabolePlayer";
import Navbar from "./Componitns/Navbar/Navbar";
import SecleatPlayer from "./Componitns/SecleatPlayer/SecleatPlayer";
import Hero from "./Componitns/HeroSections/Hero";
const playerDataFeatch = fetch("../public/Player.json").then((res) =>
  res.json()
);
const playerDataFeatcha = playerDataFeatch;
function App() {
  const [togle, setTogle] = useState(true);
  const [balences, setBalences] = useState(6000000000);
  const [clickPlyers, setClickPlyers] = useState([]);

  const removedSections = (paler) => {
    // console.log("Removed Functions Calll",paler);
    const filters = clickPlyers.filter(
      (deleat) => deleat["player-name"] !== paler["player-name"]
    );
    console.log(filters);
    setClickPlyers(filters);
    setBalences(balences + parseInt(paler.price));
  };

  return (
    <>
      <div className="px-2">
        <Navbar balences={balences}></Navbar>
        <Hero></Hero>

        <div className="flex justify-between max-w-[1100px] mx-auto mt-5 mb-4">
          <h1 className="text-xl font-semibold ">
            {togle
              ? "Available Players"
              : `Selected Player (${clickPlyers.length}/15)`}
          </h1>
          <div className="">
            <button
              onClick={() => setTogle(true)}
              className={`${togle ? "bg-[#E7FE29]  hover:bg-[#d8ed19]" : ""}
            text-black font-semibold py-2 px-6 
            rounded-l-lg shadow-md`}
            >
              Available
            </button>
            <button
              onClick={() => setTogle(false)}
              className={`${togle ? "" : "bg-[#E7FE29]  hover:bg-[#d8ed19]"}
            text-black font-semibold py-2 px-6 
            rounded-r-lg shadow-md`}
            >
              Selected (<span>{clickPlyers.length}</span>)
            </button>
          </div>
        </div>
        {togle ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AbabolePlayer
              playerDataFeatch={playerDataFeatcha}
              setBalences={setBalences}
              balences={balences}
              clickPlyers={clickPlyers}
              setClickPlyers={setClickPlyers}
            ></AbabolePlayer>
          </Suspense>
        ) : (
          <SecleatPlayer
            removedSections={removedSections}
            clickPlyers={clickPlyers}
          ></SecleatPlayer>
        )}
      </div>
    </>
  );
}

export default App;

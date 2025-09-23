import { Suspense, useEffect, useState } from "react";
import "./App.css";
import AbabolePlayer from "./Componitns/AbabolePlayer/AbabolePlayer";
import Navbar from "./Componitns/Navbar/Navbar";
import SecleatPlayer from "./Componitns/SecleatPlayer/SecleatPlayer";
import Hero from "./Componitns/HeroSections/Hero";
import Footer from "./Componitns/Footer/Footer";
import Spiner from "./Componitns/LodingSpiner/Spiner";
import { getLS, remopvedLS, setLS } from "./Componitns/LocalStors/Vanila";
const playerDataFeatch = fetch("/Player.json").then((res) =>
  res.json()
);
const playerDataFeatcha = playerDataFeatch;
function App() {
  const [togle, setTogle] = useState(true);
  const [balences, setBalences] = useState(6000000000);
  const [clickPlyers, setClickPlyers] = useState([]);
   
  useEffect(() => {
   const items = getLS();
   setClickPlyers(items);
  }, [])
console.log(clickPlyers)
  const setLocalStorageinClick = (paler) => {
   const newArray = [...clickPlyers,paler];
   setClickPlyers(newArray);
   setLS(paler)
   
  };

  const removedLocalSt = (dlet) => {
    console.log("Dleat Buttons",dlet );
    const filterLS = clickPlyers.filter(name => name["player-name"] !== dlet["player-name"]);
    setClickPlyers(filterLS);
    remopvedLS(dlet);
  }

  const sectionsHeandel = () => {
    setTogle(true)
  }
  return (
    <>
      <Navbar balences={balences}></Navbar>
      <Hero></Hero>

      <div className="flex justify-between max-w-[1100px] mx-auto mt-5 mb-4 items-center">
        <h1 className=" text-[14px] md:text-xl font-semibold ">
          {togle
            ? "Available Players"
            : `Selected Player (${clickPlyers.length}/15)`}
        </h1>
        <div className="">
          <button
            onClick={() => setTogle(true)}
            className={`${togle ? "bg-[#E7FE29]  hover:bg-[#d8ed19]" : ""}
            text-black font-semibold py-2  px-3 
            rounded-l-lg shadow-md`}
          >
            Available
          </button>
          <button
            onClick={() => setTogle(false)}
            className={`${togle ? "" : "bg-[#E7FE29]  hover:bg-[#d8ed19]"}
            text-black font-semibold py-2 px-3 
            rounded-r-lg shadow-md`}
          >
            Selected (<span>{clickPlyers.length}</span>)
          </button>
        </div>
      </div>
      <div className="px-2">
        {togle ? (
          <Suspense fallback={<Spiner></Spiner>}>
            <AbabolePlayer
              playerDataFeatch={playerDataFeatcha}
              setBalences={setBalences}
              balences={balences}
              clickPlyers={clickPlyers}
              setClickPlyers={setClickPlyers}
              setLocalStorageinClick={setLocalStorageinClick}
            ></AbabolePlayer>
          </Suspense>
        ) : (
          <SecleatPlayer
            clickPlyers={clickPlyers}
            sectionsHeandel={sectionsHeandel}
            removedLocalSt={removedLocalSt}
          ></SecleatPlayer>
          
        )}
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;

//     const filters = clickPlyers.filter(
    //   (deleat) => deleat["player-name"] !== paler["player-name"]
    // );
    // console.log(filters);
    // setClickPlyers(filters);
    // setBalences(balences + parseInt(paler.price));
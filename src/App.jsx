import { Suspense } from "react";
import "./App.css";
import AbabolePlayer from "./Componitns/AbabolePlayer/AbabolePlayer";
import Navbar from "./Componitns/Navbar/Navbar";
import SecleatPlayer from "./Componitns/SecleatPlayer/SecleatPlayer";


function App() {
  const playerDataFeatch = fetch("../public/Player.json").then(res => res.json());
  console.log(playerDataFeatch)
  return (
    <>
    <Navbar></Navbar>

 <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
     <AbabolePlayer 
    playerDataFeatch={playerDataFeatch}
    ></AbabolePlayer>
 </Suspense>


    {/* <SecleatPlayer></SecleatPlayer>      */}
    </>
  );
}

export default App;

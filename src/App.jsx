import "./App.css";
import navLogo from './assets/logo.png'
import coins from './assets/Currency.png'

function App() {
  return (
    <>
      <div className="navbar max-w-[1150px] mx-auto">
        <div className="flex-1">
          <a className=" btn-ghost text-xl">
            <img className="w-[70px] h-[60px]" src={navLogo}></img>
          </a>
        </div>
        <div className="flex items-center">
           <span className="mr-1">6000000000</span>
           <span className="mr-1">Coin</span>
           <img src={coins}></img>
        </div>
      </div>
    </>
  );
}

export default App;

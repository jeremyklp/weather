import "./styles.css";
import "./App.css"
import City from "./components/City";
import Degrees from "./components/Degrees";
import Wind from "./components/Wind";
import Clouds from "./components/Clouds";
import Pressure from "./components/Pressure";
import Cloudimg from "./components/Cloudimg";


import viento from "./img/viento.png"
import termo from "./img/termometro.png"
import nube from "./img/nube.png"
import atmo from "./img/atmosferico.png"

function App() {



  return (
    <div className="App">
      <div className="box">
            
        <div className="centercontent">
            <City/>
            <Cloudimg/>
            <div id="degres2">
              <img id="wind2" src={termo} alt="" /><Degrees/>
            </div>
        </div>
        <div className="right">
            <div className="uno">
              <img id="wind" src={viento} alt="" /><Wind/>
            </div>
            <div className="uno">
              <img id="wind" src={nube} alt="" /><Clouds/>
            </div>
            <div className="uno">
              <img id="wind" src={atmo} alt="" /><Pressure/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

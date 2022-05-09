import { useState, useEffect } from "react";
import axios from "axios";



const Degrees = () => {
 
  const[degrees, setdegrees]=useState()
  const[isdegrees, setisdegrees]=useState(true)




  







  useEffect(()=>{
    function success(pos) {
        let crd = pos.coords;
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=b86b5a7ca7aa721b38429eef294bc12b`)
                .then(res=> setdegrees((res.data.main.temp-273.15).toFixed(1)))
    }
    function error(err) {
     console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error);

      
},[])


  const buttonclick=()=>{
    if(isdegrees){
      setdegrees((degrees*1.8 + 32).toFixed(1))
      setisdegrees(false)
    }
    else{
      setdegrees(((degrees-32)/1.8).toFixed(1))
      setisdegrees(true)
    }
  }









// alt 0176 for the simbol grades
    return (
        <div >
          <h1 className="grades">{degrees}{isdegrees? "C°": "F°" }</h1>
           <button onClick={buttonclick}><a href="">{isdegrees? "F°": "C°"}</a></button>
        </div>
    );
};

export default Degrees;
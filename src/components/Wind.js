import { useState, useEffect } from "react";
import axios from "axios";

const Wind = () => {

const[wind, setwind]= useState()

    useEffect(()=>{
        function success(pos) {
            let crd = pos.coords;
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=b86b5a7ca7aa721b38429eef294bc12b`)
                    .then(res=> setwind(res.data))
        }
        function error(err) {
         console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error);
       
          
    
    },[])







    return (
        <div>
        <h1>{wind?.wind?.speed} m/s</h1>
        </div>
    );
};

export default Wind;
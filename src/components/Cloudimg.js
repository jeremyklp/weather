import { useState, useEffect } from "react";
import axios from "axios";

const Cloudimg = () => {
    
    const[cloudpicture, setcloudpicture]=useState({})
    
    
    
    useEffect(()=>{
        function success(pos) {
            let crd = pos.coords;
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=b86b5a7ca7aa721b38429eef294bc12b`)
                    .then(res=> setcloudpicture(res.data.weather[0].icon))
        }
        function error(err) {
         console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error);
       
          
    
    },[])





    return (
        <div>
            <img src={`http://openweathermap.org/img/wn/${cloudpicture}@2x.png`} alt="" />
        </div>
    );
};

export default Cloudimg;
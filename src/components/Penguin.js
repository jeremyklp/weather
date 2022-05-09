import React from 'react';
import { useState, useEffect } from "react";


const Penguin = () => {
    
    
    useEffect(()=>{
console.log("asdasdasd");


    }, [])
    
    
    
    
    return (
        <div>
            <img style={{
                width:"300px"
            }} src="https://st3.depositphotos.com/6633222/18794/v/950/depositphotos_187942812-stock-illustration-vector-illustration-cartoon-little-baby.jpg" alt="" />
        </div>
    );
};

export default Penguin;
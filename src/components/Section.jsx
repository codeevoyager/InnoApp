import React from "react";
import Recommend from "./Section/Recommend";
import Trending from "./Section/Trending";
import Adventure from "./Section/Adventure";

function Section(){

    return(
        <div>
            <Recommend/>   
            <Trending/>       
            <Adventure/>  
        </div>
    )
}

export default Section;
import React, { useRef } from "react";
import { homeData } from "../data";
import ScrollableComponent from "./ScrollableComponent";



const HomeData = () => {
  return (
    <div>
        <ScrollableComponent  data = {homeData}/>
    </div>
  )
}

export default HomeData
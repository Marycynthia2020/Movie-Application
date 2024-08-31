import React, { useRef } from "react";
import PlayButton from "./PlayButton";
import "./gridmovies.css"

const GridMovies = ({data, name}) => {

    const scrollRef = useRef(null);

    // Function to scroll left
    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };
  
    // Function to scroll right
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

  const homeMovies = data.map((movie) => {
    const {
      id,
      cover,
      name,
      time
    } = movie;

    return (
      <div key={id} className="container container1" >
        <img src={cover} alt="cover-image" className="cover-image" />
        <h2 className = "reduce-heading">{name}</h2>
        <div class="contain"> 
          <span>{time}</span>
        </div>
        <PlayButton />
      </div>
    );
  });


  return (
    <>
    <h2 className="heading">{name}</h2>
    <div className="scroll-container-wrapper scroll-container-wrapper1">
      <button onClick={scrollLeft} className="scroll-button left-button">
        &#9664; {/* Left arrow */}
      </button>
      <div className="scroll-container scroll-container1" ref={scrollRef}>
        {homeMovies}
      </div>
      <button onClick={scrollRight} className="scroll-button right-button">
        &#9654; {/* Right arrow */}
      </button>
    </div>
    </>
  )
};

export default GridMovies ;


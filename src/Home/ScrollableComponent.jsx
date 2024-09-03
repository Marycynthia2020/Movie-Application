import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./scrollablecomponet.css";
import PlayButton from "./PlayButton";
import { Link } from "react-router-dom";
import playButton from "/images/play-button.png"

const ScrollableComponent = ({ data }) => {
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
      name,
      rating,
      time,
      desc,
      starring,
      genres,
      tags,
      cover,
      video,
      date,
    } = movie;

    return (
      <div key={id} className="container">
        <img src={cover} alt="cover-image" className="cover-image" />
        <h2>{name}</h2>
        <div class="contain">
          <span className="iconic">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span>{rating}(lmdb)</span>
          <span>GP</span>
          <p>{time}</p>
        </div>
        <p className="description">{desc}</p>
        <Link to={`/moviedetails/${id}`} className="trailer">
          <button className="watch-trailer-button">
            <div className="watch">
            <img src={playButton} className="watch-icon" />
            </div>
            WATCH TRAILER
          </button>
        </Link>

        <p>
          <span className="red"> Staring</span>
          {starring}
        </p>
        <p>
          <span className="red"> Genres</span>
          {genres}
        </p>
        <p>
          <span className="red"> Tags</span>
          {tags}
        </p>
        <PlayButton />
      </div>
    );
  });

  return (
    <div className="scroll-container-wrapper">
      <button onClick={scrollLeft} className="scroll-button left-button">
        &#9664; {/* Left arrow */}
      </button>
      <div className="scroll-container" ref={scrollRef}>
        {homeMovies}
      </div>
      <button onClick={scrollRight} className="scroll-button right-button">
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default ScrollableComponent;

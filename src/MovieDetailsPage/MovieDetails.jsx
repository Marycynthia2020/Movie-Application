import React from "react";
import Recommended from "../Home/Recommended";
import Footer from "../Footer/Footer";
import "./moviedetails.css"
import { NavLink } from "react-router-dom";

const MovieDetails = ({ data }) => {
  const { id, name, time, desc, video, date } = data;

  return (
    <div className="played-movie-container">
      <div key={id}>
        <div className="span">
          <p className="movie-title">{name} </p>
          <span> | {time} |</span>
          <span>HD</span>
        </div>
        <div style={{display: "flex", justifyContent:"center", alignItems:"center", marginBottom:'3rem'}}>
          <video controls autoplay loop muted>
            <source src ={video} type="video/mp4" />
            <source src ={video} type="video/webm" />
            Your browser does not support the video tag
          </video>
        </div>
        <p className="desc">DATE: {date}</p>
        <p className="desc">{desc}</p>
          
          <p className='desc'>
          Get access to the direct Project Overview with this report. Just by a
          quick glance, you'll have an idea of the total tasks allotted to the
          team, number of milestones given & completed, total Links created for
          the project and the total time taken by all the users. Each section
          would elaborate the data further, if chosen.
          </p>
          <p className="desc">
          Get access to the direct Project Overview with this report. Just by a
          quick glance, you'll have an idea of the total tasks allotted to the
          team, number of milestones given & completed, total Links created for
          the project and the total time taken by all the users. Each section
          would elaborate the data further, if chosen.
          </p>
          <p className="desc">
          Get access to the direct Project Overview with this report. Just by a
          quick glance, you'll have an idea of the total tasks allotted to the
          team, number of milestones given & completed, total Links created for
          the project and the total time taken by all the users. Each section
          would elaborate the data further, if chosen.
        </p>
      </div>

      <Recommended />
      <NavLink to="/" className="view-all">View All</NavLink>
      <Footer />
    </div>
  );
};

export default MovieDetails;

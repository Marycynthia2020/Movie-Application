import React from 'react'

const myStyle = {
        display: "flex",
        alignItems: "center",
        backgroundColor: "red",
        color: "#fff",
        height: "40px",
        border: "none",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: 800,
        padding: "2rem",
        marginTop: "1rem",
        marginLeft: "2rem"
}

const PlayButton = () => {
  return (
    <div>
        <button style = {myStyle}>
        &#9664; Play Now
        </button>
    </div>
  )
}

export default PlayButton
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NotFound.css";

export default function NotFound() {
  let [playerX, setPlayerX] = useState(100);
  let [playerY, setPlayerY] = useState(100);

  return (
    <div className='container'>
      <div
        style={{
          position: "absolute",
          height: "10px",
          width: "10px",
          backgroundColor: "red",
          left: `${playerX}px`,
          top: `${playerY}px`,
        }}
      ></div>
      <div>SORRY</div>
      <div>That page is not found.</div>
      <div>Please return to the home page.</div>

      <Link role='link' to='/'>
        Go to the home page
      </Link>
    </div>
  );
}

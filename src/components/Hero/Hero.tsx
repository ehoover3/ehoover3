import laptop from "../../assets/laptop.png";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Nav from "react-bootstrap/Nav";
import "./Hero.css";
import { ReactElement, useState } from "react";
import projects from "../../data/projects.json";

export default function Hero(): ReactElement {
  const [projectIndex, setProjectIndex] = useState(0);

  function handlePrevButton() {
    if (projectIndex <= 0) setProjectIndex(projects.length - 1);
    else setProjectIndex(projectIndex - 1);
  }
  function handleNextButton() {
    if (projects.length - 1 <= projectIndex) setProjectIndex(0);
    else setProjectIndex(projectIndex + 1);
  }

  return (
    <div className='hero'>
      <div className='margin'>
        <Nav.Link href={projects[projectIndex].href} className='heroImagesContainer'>
          <img src={laptop} alt='laptop' className='imgHover frontImage ' />
          <div className='heroText' style={{ color: projects[projectIndex].color }}>
            {projects[projectIndex].title}
          </div>
          <div
            style={{ backgroundColor: projects[projectIndex].backgroundColor }}
            className='imgHover backImage'
          ></div>
        </Nav.Link>
      </div>
      <div className='buttonContainer'>
        <Button
          variant='outlined'
          size='large'
          startIcon={
            <div className='rotate'>
              <SendIcon />
            </div>
          }
          onClick={handlePrevButton}
        >
          Prev
        </Button>
        <Button variant='contained' size='large' endIcon={<SendIcon />} onClick={handleNextButton}>
          Next
        </Button>
      </div>
      <div className='textContainer'>
        <h1 className='headerFont'>Eric Hoover | Software Engineer</h1>
        <a style={{ textDecoration: "none" }} href={"https://www.linkedin.com/in/hoov"}>
          https://www.linkedin.com/in/hoov
        </a>
      </div>
    </div>
  );
}

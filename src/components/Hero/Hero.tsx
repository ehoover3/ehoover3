import laptop from "../../assets/laptop.png";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Hero.css";
export default function Hero() {
  return (
    <div className='hero'>
      <div className='margin'>
        <img src={laptop} alt='' className='imgHover' />
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
        >
          Prev
        </Button>
        <Button variant='contained' size='large' endIcon={<SendIcon />}>
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

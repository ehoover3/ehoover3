import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import "./Projects.css";
import { ReactElement } from "react";

export default function ProjectCard({
  href,
  backgroundColor,
  symbol,
  title,
  description,
  technicalSkills,
}: any): ReactElement {
  return (
    <Nav.Link href={href} className='navLink'>
      <Card className='card'>
        <div
          className='cardImg'
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100px",
            color: "white",
            fontWeight: "bold",
            fontSize: "75px",
            backgroundColor: backgroundColor,
          }}
        >
          {symbol}
        </div>
        <Card.Body className='cardBody'>
          <Card.Title className='cardTitle'>{title}</Card.Title>
          <div>
            <div>{description}</div>
            <br />
            <div className='cardText'>Technical Skills</div>
            <div>{technicalSkills}</div>
          </div>
        </Card.Body>
      </Card>
    </Nav.Link>
  );
}

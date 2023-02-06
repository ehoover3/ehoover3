import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";

export default function ProjectCard({
  href,
  backgroundColor,
  symbol,
  title,
  description,
  technicalSkills,
}: any) {
  return (
    <Nav.Link href={href} className='navLink'>
      <Card className='card'>
        <div
          className='cardImg'
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          {symbol}
        </div>
        <Card.Body className='cardBody'>
          <Card.Title className='cardTitle'>{title}</Card.Title>
          <Card.Text>
            <div>{description}</div>
            <br />
            <div className='cardText'>Technical Skills</div>
            <div>{technicalSkills}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Nav.Link>
  );
}

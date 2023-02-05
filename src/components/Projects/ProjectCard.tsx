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
    <Nav.Link href={href} style={{ margin: "25px" }}>
      <Card style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100px",
            backgroundColor: backgroundColor,
            color: "white",
            fontWeight: "bold",
            fontSize: "75px",
          }}
        >
          {symbol}
        </div>
        <Card.Body style={{ backgroundColor: "#f7f7f7" }}>
          <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>{title}</Card.Title>
          <Card.Text>
            <div>{description}</div>
            <br />
            <div style={{ fontWeight: "bold", fontStyle: "italic" }}>Technical Skills</div>
            <div>{technicalSkills}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Nav.Link>
  );
}
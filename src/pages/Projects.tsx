import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Projects() {
  return (
    <div style={{ margin: "5%" }}>
      <h1>Projects</h1>
      <Nav.Link href='./loancalculator'>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100px",
              backgroundColor: "#58cc02",
              color: "white",
              fontWeight: "bold",
              fontSize: "75px",
            }}
          >
            %
          </div>
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
              Loan Calculator
            </Card.Title>
            <Card.Text>
              <div>
                Enter loan amount, term, and rate to calculate the monthly payment, total interest,
                & total paid
              </div>
              <br />
              <div style={{ fontWeight: "bold", fontStyle: "italic" }}>Technical Skills</div>
              <div>React useState and useEffect</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Nav.Link>
    </div>
  );
}

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PrevNext from "../components/PrevNext";
import Progress from "../components/Progress";
import SubgenreButtons from "../components/SubgenreButtons";

const Subgenre = () => {
  return (
    <Container className="maincard">
      <Row>
        <Col>
          <Card className="p-3 rounded">
            <Card.Text>Add Book - New Book</Card.Text>
            <Progress />
            <SubgenreButtons />
            <PrevNext />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Subgenre;

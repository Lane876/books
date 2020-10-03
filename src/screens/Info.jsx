import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InfoInput from "../components/InfoInput";
import PrevNext from "../components/PrevNext";
import Progress from "../components/Progress";

const Info = () => {
  return (
    <Container className="info">
      <Row>
        <Col>
          <Card className="p-3 rounded">
            <Card.Text>Add Book - New Book</Card.Text>
            <Progress />
            <InfoInput />
            <PrevNext />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;

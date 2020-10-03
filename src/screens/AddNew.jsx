import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Input from "../components/Input";
import PrevNext from "../components/PrevNext";
import Progress from "../components/Progress";

const AddNew = () => {
  return (
    <Container className="maincard">
      <Row>
        <Col>
          <Card className="p-3 rounded">
            <Card.Text>Add Book - New Book</Card.Text>
            <Progress />
            <Input />
            <PrevNext />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNew;

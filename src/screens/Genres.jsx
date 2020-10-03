import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GenresButtons from "../components/GenresButtons";
import PrevNext from "../components/PrevNext";
import Progress from "../components/Progress";

const Genres = () => {
  return (
    <Container className="maincard">
      <Row>
        <Col>
          <Card className="p-3 rounded">
            <Card.Text>Add Book - New Book</Card.Text>
            <Progress />
            <GenresButtons />
            <PrevNext />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Genres;

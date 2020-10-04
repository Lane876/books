import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GenresButtons from "../components/GenresButtons";
import PrevNext from "../components/PrevNext";
import Progress from "../components/Progress";
import { motion } from "framer-motion";

const Genres = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default Genres;

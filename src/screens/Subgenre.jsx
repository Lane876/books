import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PrevNext from "../components/PrevNext";
import Progress from "../components/Progress";
import SubgenreButtons from "../components/SubgenreButtons";
import { motion } from "framer-motion";

const Subgenre = () => {
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
              <SubgenreButtons />
              <PrevNext />
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Subgenre;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InfoInput from "../components/InfoInput";
import Progress from "../components/Progress";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Container className="info">
        <Row>
          <Col>
            <Card className="p-3 rounded">
              <Card.Text>Add Book - New Book</Card.Text>
              <Progress />
              <InfoInput />
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Info;

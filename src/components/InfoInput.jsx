import React, { useEffect, useState } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import books from "../data";

const InfoInput = () => {
  const check = useSelector((state) => state.check.check);
  const subgenre = useSelector((state) => state.subgenre.subgenre);
  const bookid = useSelector((state) => state.active.active);
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    books.map(
      (book) => bookid === book.id && setIsTrue(book.subgenres[subgenre])
    );
  }, []);

  return (
    <Form.Group>
      <Form.Group className="infoinput">
        <Form.Label>Book title</Form.Label>
        <InputGroup className="mb-1 rounded">
          <FormControl
            placeholder="Book name"
            label="Book name"
            aria-describedby="basic-addon2"
            className="rounded"
            style={{ outlineColor: "gray", border: "1px solid gray" }}
          />
        </InputGroup>
        <Form.Label>Author</Form.Label>
        <Form.Control
          as="select"
          className="rounded"
          style={{ outlineColor: "gray", border: "1px solid gray" }}
        >
          <option>Author</option>
        </Form.Control>

        <Form.Label className="pt-2">ISBN</Form.Label>
        <InputGroup className="mb-1 rounded">
          <FormControl
            placeholder="ISBN"
            label="ISBN"
            aria-describedby="basic-addon2"
            className="rounded"
            style={{ outlineColor: "gray", border: "1px solid gray" }}
          />
        </InputGroup>

        <Form.Label className="pt-2">Publisher</Form.Label>
        <Form.Control
          as="select"
          className="rounded"
          style={{ outlineColor: "gray", border: "1px solid gray" }}
        >
          <option>Publisher</option>
        </Form.Control>
        <Form.Label className="pt-2">Date Published</Form.Label>
        <InputGroup className="rounded" style={{ width: "300px" }}>
          <FormControl
            type="date"
            placeholder="Date"
            label="Date"
            aria-describedby="basic-addon2"
            className="rounded"
            style={{
              outlineColor: "gray",
              border: "1px solid gray",
            }}
          />
        </InputGroup>
        <Form.Label className="pt-2">Number of pages</Form.Label>
        <InputGroup className="mb-1 rounded" style={{ width: "200px" }}>
          <FormControl
            type="number"
            placeholder="Number of pages"
            label="Number of pages"
            aria-describedby="basic-addon2"
            className="rounded"
            style={{ outlineColor: "gray", border: "1px solid gray" }}
          />
        </InputGroup>

        <Form.Label className="pt-2">Format</Form.Label>
        <Form.Control
          as="select"
          className="rounded"
          style={{
            outlineColor: "gray",
            border: "1px solid gray",
            width: "300px",
          }}
        >
          <option>Format</option>
        </Form.Control>
        <div style={{ display: "flex" }}>
          <div className="d-flex flex-column">
            <Form.Label className="pt-2">Edition</Form.Label>
            <InputGroup className="rounded" style={{ width: "200px" }}>
              <FormControl
                placeholder="Edition"
                label="Edition"
                aria-describedby="basic-addon2"
                className="rounded"
                style={{
                  outlineColor: "gray",
                  border: "1px solid gray",
                }}
              />
            </InputGroup>
          </div>
          <div className="d-flex flex-column pl-3">
            <Form.Label className="pt-2">Edition language</Form.Label>
            <InputGroup className="rounded" style={{ width: "200px" }}>
              <Form.Control
                as="select"
                className="rounded"
                style={{ outlineColor: "gray", border: "1px solid gray" }}
              >
                <option>Edition language</option>
              </Form.Control>
            </InputGroup>
          </div>
        </div>
        <Form.Group className="pt-2">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required={isTrue}
            as="textarea"
            rows={3}
            placeholder="Type the description..."
            className="rounded"
            style={{
              outlineColor: "gray",
              border: "1px solid gray",
            }}
          />
        </Form.Group>
      </Form.Group>
    </Form.Group>
  );
};

export default InfoInput;

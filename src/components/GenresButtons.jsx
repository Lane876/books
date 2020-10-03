import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import books from "../data";
import { setGenreId } from "../redux/actions";

const Genres = () => {
  const [id, setid] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id === books.id) {
      dispatch(setGenreId(id));
    } else {
      dispatch(setGenreId(id));
    }
  }, [id, dispatch]);

  return (
    <div
      className="pt-3"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {books.map((book) => (
        <Col key={book.id} xl={3} md={3} lg={3} sm={3} xs={3}>
          <Button
            variant="outline-dark"
            className="m-1 rounded h-60 w-100"
            onClick={() => setid(book.id)}
            active={id === book.id ? "active" : false}
            style={{
              margin: "0 auto",
            }}
          >
            {" "}
            {book.name}
          </Button>
        </Col>
      ))}
    </div>
  );
};

export default Genres;

import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import books from "../data";
import { flag, setGenreId } from "../redux/actions";

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

  const handleId = (id) => {
    setid(id);
    dispatch(flag(true));
  };

  return (
    <div className="pt-3 genresBtn">
      {books.map((book) => (
        <Col key={book.id} xl={3} md={3} lg={3} sm={3} xs={3}>
          <Button
            variant="outline-dark"
            className="m-1 rounded  text-center genresBtn"
            onClick={() => handleId(book.id)}
            active={id === book.id ? "active" : false}
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

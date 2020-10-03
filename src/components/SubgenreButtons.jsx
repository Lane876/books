import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import books from "../data";
import { addNew, flag, setSubgenre } from "../redux/actions";

const SubgenreButtons = () => {
  const [id, setId] = useState("");
  const [addNewActive, setAddNewActive] = useState(false);
  const bookid = useSelector((state) => state.active.active);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    setId(i);
    setAddNewActive("");
    dispatch(setSubgenre(i));
    dispatch(addNew(false));
    dispatch(flag(true));
  };

  const handleAdd = () => {
    setAddNewActive(true);
    dispatch(addNew(true));
    dispatch(flag(true));
  };

  return (
    <div
      className="pt-3"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {books.map(
        (book) =>
          bookid === book.id &&
          book.subgenres.map((subgenre, i) => (
            <Row key={subgenre.id}>
              <Col xl={3} md={3} lg={3} sm={3} xs={3}>
                <Button
                  variant="outline-dark"
                  className="m-1 rounded"
                  onClick={() => handleClick(i)}
                  active={id === i && !addNewActive ? "active" : false}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  {subgenre.name}
                </Button>
              </Col>
            </Row>
          ))
      )}
      <Button
        variant="outline-dark"
        className="m-1 rounded"
        onClick={handleAdd}
        active={addNewActive}
      >
        Add New
      </Button>
    </div>
  );
};

export default SubgenreButtons;

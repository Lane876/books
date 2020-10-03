import React from "react";
import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getRoute } from "../redux/actions";

const Progress = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const genre = location.pathname === "/";
  const subgenre = location.pathname === "/subgenre";
  const addnew = location.pathname === "/addnew";
  const info = location.pathname === "/info";

  return (
    <div className="p-3">
      <Row>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  borderRadius: "50%",
                  fontSize: "1rem",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="outline-dark"
                active={genre}
                onClick={() => dispatch(getRoute("/"))}
              >
                1
              </Button>
            </Link>
            <div>Genre</div>
          </div>
          <div
            style={{
              width: "80px",
              height: "1px",
              border: ".5px solid gray",
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: "-22px",
              marginLeft: "8px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/subgenre" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  borderRadius: "50%",
                  fontSize: "1rem",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="outline-dark"
                disabled={genre}
                active={subgenre}
              >
                2
              </Button>
            </Link>
            <div>Subgenre</div>
          </div>
          <div
            style={{
              width: "80px",
              height: "1px",
              border: ".5px solid gray",
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              marginTop: "-22px",
              marginRight: "-36px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/addnew" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  borderRadius: "50%",
                  fontSize: "1rem",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                variant="outline-dark"
                disabled={!addnew}
                active={addnew}
              >
                {addnew ? "3" : info ? "3" : "..."}
              </Button>
            </Link>

            <div className={genre ? "white" : subgenre ? "white" : null}>
              Add New Subgenre
            </div>
          </div>

          {addnew ? (
            <>
              <div
                style={{
                  width: "80px",
                  height: "1px",
                  border: ".5px solid gray",
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  marginTop: "-22px",
                  marginLeft: "-36px",
                  marginRight: "-8px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  style={{
                    borderRadius: "50%",
                    fontSize: "1rem",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="outline-dark"
                  disabled={!info}
                  active={info}
                >
                  <div style={{ display: "flex" }}> 4</div>
                </Button>
                <div>Information</div>
              </div>
            </>
          ) : info ? (
            <>
              <div
                style={{
                  width: "80px",
                  height: "1px",
                  border: ".5px solid gray",
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  marginTop: "-22px",
                  marginLeft: "-36px",
                  marginRight: "-8px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  style={{
                    borderRadius: "50%",
                    fontSize: "1rem",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  variant="outline-dark"
                  disabled={!info}
                  active={info}
                >
                  <div style={{ display: "flex" }}> 4</div>
                </Button>
                <div>Information</div>
              </div>
            </>
          ) : null}
        </div>
      </Row>
    </div>
  );
};

export default Progress;

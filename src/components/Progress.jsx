import React from "react";
import { Button, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getRoute } from "../redux/actions";

const Progress = () => {
  const history = useHistory();
  const addsubgerne = useSelector((state) => state.addsubgerne.addsubgerne);
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
          <div className="progressBtnAndTitle">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                className="progressBtn"
                variant="outline-dark"
                active={genre}
                onClick={() => dispatch(getRoute("/"))}
              >
                1
              </Button>
            </Link>
            <div>Genre</div>
          </div>
          <div className="firstConnectLine" />
          <div className="progressBtnAndTitle">
            <Button
              className="progressBtn"
              variant="outline-dark"
              disabled={genre}
              active={subgenre}
              onClick={() => history.push("/subgenre")}
            >
              2
            </Button>

            <div>Subgenre</div>
          </div>
          <div className="secondConnectLine" />
          <div className="progressBtnAndTitle">
            <Button
              className="progressBtn"
              variant="outline-dark"
              disabled={!addnew && !addsubgerne}
              active={addnew}
              onClick={() => history.push("/addnew")}
            >
              {addnew ? "3" : info ? "3" : "..."}
            </Button>

            <div className={genre ? "white" : subgenre ? "white" : null}>
              Add New Subgenre
            </div>
          </div>

          {addnew ? (
            <>
              <div className="secondConnectLine" />
              <div className="progressBtnAndTitle">
                <Button
                  className="progressBtn"
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
              <div className="thirdConnectLine" />
              <div className="progressBtnAndTitle">
                <Button
                  className="progressBtn"
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

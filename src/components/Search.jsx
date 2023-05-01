import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const Search = ({ setSearch }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div>
        {/* <Row> */}
        <Col sm={12}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />

            <Button
              className="text-white"
              onClick={() => {
                text.length != 0 ? setSearch(text) : setSearch("Man");
              }}
            >
              SEARCH
            </Button>
          </Form>
        </Col>
        {/* </Row> */}
      </div>
    </>
  );
};

export default Search;

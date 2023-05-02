import { Fragment, useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardCustom from "../components/CardCustom";

const Movie = ({ state }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(state?.movies?.Search);
  }, [state.movies]);

  return (
    <>
      <Fragment>
        <Container>
          <div>
            <div className="my-5">
              <h2>Show your favourite movies</h2>
            </div>
            <Row xs={2} md={4}>
              {data?.map((data, index) => {
                return (
                  <div key={index}>
                    <CardCustom data={data} />
                  </div>
                );
              })}
            </Row>
            {state?.errorMessage && <span>{state?.errorMessage}</span>}
            {state?.movies?.Response === "False" && (
              <span>{state?.movies?.Error}</span>
            )}
            {state?.isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </div>
        </Container>
      </Fragment>
    </>
  );
};

export default Movie;

import { Container, Navbar } from "react-bootstrap";
import Search from "../components/Search";
import { Fragment } from "react";

const Header = ({ setSearch }) => {
  return (
    <>
      <Fragment>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand>
              <h2 className="text-white">FinProH8</h2>
            </Navbar.Brand>
            <Search setSearch={setSearch} />
          </Container>
        </Navbar>
      </Fragment>
    </>
  );
};

export default Header;

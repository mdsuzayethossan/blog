import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUser } from "react-icons/fa";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          <Link to="/" className="text-decoration-none">
            Finder
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="mx-3">
              Home
            </Nav.Link>
            <NavDropdown
              title="Link"
              className="mx-3"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form> */}
          <div className="d-flex align-items-center text-dark">
            {user?.uid ? (
              <>
                <Link className="me-3 fw-bold text-decoration-none">
                  <DropdownButton
                    align="end"
                    title={user?.displayName}
                    id="dropdown-menu-align-end"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogOut} eventKey="4">
                      Logout
                    </Dropdown.Item>
                  </DropdownButton>
                </Link>
                <Link>
                  {user?.photoURL ? (
                    <Image
                      width={50}
                      id="dropdown-menu-align-end"
                      roundedCircle
                      src={user.photoURL}
                    ></Image>
                  ) : (
                    <FaUser></FaUser>
                  )}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="me-3 fw-bold text-decoration-none"
                >
                  Register
                </Link>
                <Link to="/login" className="me-3 fw-bold text-decoration-none">
                  Login
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

import { Link } from "react-router-dom";
import { 
    Navbar, 
    Nav, 
    Form, 
    FormControl,
    Container
} from "react-bootstrap";
import {FaFeatherAlt, FaHome, FaLeaf, FaLinux} from 'react-icons/fa'

const NavbarComp = ({search, handleResult}) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/"><FaLeaf/> MY BLOG </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to="/"> <FaHome /> Home</Nav.Link>
                    <Nav.Link as={Link} to="/post"><FaFeatherAlt/> Post</Nav.Link>
                    <Nav.Link as={Link} to="/about"><FaLinux/> About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search Posts"
                    value={search}
                    className="me-2"
                    onChange={(e)=> handleResult(e)}
                    aria-label="Search"
                    />
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp


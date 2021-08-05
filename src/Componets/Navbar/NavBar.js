import React from 'react'
import { Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import "./NavBar.css"


// APi key :7d69b76bbb69c83b9dff51943d6520e7
//API link:https://api.themoviedb.org/3/movie/550?api_key=7d69b76bbb69c83b9dff51943d6520e7


function NavBar() {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getMovies())
    // }, [dispatch])


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container fluid style={{ height: "60px", backgroundColor: "black" }}>
                    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Movie" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="movie">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">upcoming</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Tv Shows" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">upcoming</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="People" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">upcoming</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default NavBar;
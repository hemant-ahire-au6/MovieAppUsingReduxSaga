import React, {useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { getMovies} from '../../redux/action/action';
import { Navbar, NavDropdown, Container, Nav} from 'react-bootstrap';
import "./NavBar.css"
import SearchBar from '../SearchBar/SearchBar';


// APi key :7d69b76bbb69c83b9dff51943d6520e7
//API link:https://api.themoviedb.org/3/movie/550?api_key=7d69b76bbb69c83b9dff51943d6520e7


function NavBar() {
    const dispatch = useDispatch()
    // const movies = useSelector(state => state.movies)

    // const [searchTerm, setSearchTerm] = useState("")

    //    const getMoviesData = useCallback(()=> dispatch(getMovies()),[] )

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    // const handleOnSubmit = (e) => {
    //     e.preventDefault()

    //     if (searchTerm) {
    //         dispatch(searchMovies(searchTerm))

    //         setSearchTerm("")
    //     }
    // }

    // const handleOnChange = (e) => {
    //     setSearchTerm(e.target.value)

    // }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container fluid style={{ height: "60px", backgroundColor: "black" }}>
                    <Navbar.Brand href="#home">Movie App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <NavDropdown title="Movie" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
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
                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SearchBar/>

            {/* <div className="movie-container">
                {movies.map(movie => {
                    return <Movie key={movie.id} data={movie} />
                })}
            </div> */}

        </>
    )
}

export default NavBar;
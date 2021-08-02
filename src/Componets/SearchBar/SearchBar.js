import React,{useState} from 'react'
import { useDispatch} from 'react-redux';
import {Button} from "react-bootstrap"
import { searchMovies } from '../../redux/action/action';

function SearchBar() {

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (searchTerm) {
            dispatch(searchMovies(searchTerm))

            setSearchTerm("")
        }
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)

    }
    return (
        <div>
            <header >
                <h1>Welcome.
                    Millions of movies, TV shows and people to discover. Explore now</h1>
                <form className="form" onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="search"
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                    <Button variant="secondary">Secondary</Button>
                </form>
            </header>
        </div>
    )
}

export default SearchBar;

import React from 'react'
import { Accordion,Dropdown,DropdownButton } from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {
    getPopularityAscending,
    getPopularityDecending,
    getRatingAscending,
    getRatingDecending,
    getReleaseDateAscending,
    getReleaseDateDecending,
    getAtoZ
} from "../../redux/action/action"

function SortComponent() {

    const dispatch = useDispatch()

    const handlePopularityAScending = ()=>{
        dispatch(getPopularityAscending())
    }

    const handlePopularityDecending = ()=>{
        dispatch(getPopularityDecending())
    }

    const handleRatingAscending = ()=>{
        dispatch(getRatingAscending())
    }

    const handleRatingDecending = ()=>{
        dispatch(getRatingDecending())
    }

    const handleReleaseDateAscending = ()=>{
        dispatch(getReleaseDateAscending())
    }

    const handleReleaseDateDecending = ()=>{
        dispatch(getReleaseDateDecending())
    }

    const handleTitleSort = ()=>{
        dispatch(getAtoZ())
    }
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Sort</Accordion.Header>
                    <Accordion.Body>
                        <p>Sort Result By</p>

                        <DropdownButton id="dropdown-item-button" title="Select Option to sort">
                            <Dropdown.Item as="button" onClick={handlePopularityDecending} >Popularity decending</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={handlePopularityAScending}>Popularity ascending</Dropdown.Item>
                            <Dropdown.Item 
                                as="button" 
                                onClick={handleRatingAscending}
                            >
                                Rating ascending
                            </Dropdown.Item>
                            <Dropdown.Item 
                            as="button"
                            onClick={handleRatingDecending}
                            >Rating decending</Dropdown.Item>
                            <Dropdown.Item as="button"  onClick ={handleReleaseDateDecending} >Release date decending</Dropdown.Item>
                            <Dropdown.Item as="button" onClick ={handleReleaseDateAscending}>Release date ascending</Dropdown.Item>
                            <Dropdown.Item as="button" onClick = {handleTitleSort}>Title(A-z)</Dropdown.Item>
                        </DropdownButton>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default SortComponent;

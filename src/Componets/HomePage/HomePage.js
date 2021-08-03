import React from 'react'
import NavBar from '../Navbar/NavBar'
import ImagesDiv from '../ImageDiv/ImagesDiv';


function HomePage() {
    return (
        <div>
            <NavBar/>
            <div>
                <h3>What's Popular</h3>
                <ImagesDiv/>
            </div>
        </div>
    )
}

export default HomePage;

import Questions from "../components/Questions"
import NavBar from "../components/NavBar" // Import NavBar
import "./Home.css"
import React from 'react'

const Home = () => {
    return (
        <div className="body">

            <h1 className="h1">This is home</h1>
            <NavBar /> {/* Use NavBar */}
            <h2 className="h2">Questions</h2>
            <Questions />
        </div>
    )
}

export default Home

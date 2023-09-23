import NavBar from "../components/NavBar"
import Questions from "../components/Questions"
import "./Home.css"
import React from 'react'

const Home = () => {
    const getQuestion = () => {
        // Implement your function to get a question here.
    }

    return (
        <div className="body">
            
            <Questions />
            <NavBar />
           
        </div>
    )
}

export default Home;

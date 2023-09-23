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
            <h1 className="h1">This is home</h1>
            <h2 className="h2">Questions</h2>
            <Questions />
            <NavBar />
            {/* <div className="NavBar">
            </div> */}
        </div>
    )
}

export default Home;

import Questions from "../components/Questions"
import "./Home.css"
import React from 'react'

const Home = () => {
    return (
        <div>

            <div>This is home</div>
            <div className="QuestionComponent">Questions
            <Questions />
            </div>
        </div>
    )
}

export default Home 
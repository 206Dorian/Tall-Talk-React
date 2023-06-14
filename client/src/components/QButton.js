import React from 'react'
import './QButton.css';

const QButton = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>QuestionButton</button>
        </div>
    )
}

export default QButton
import React from 'react'
import './QButton.css';

const QButton = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>Ready for your Next Question?</button>
        </div>
    )
}

export default QButton
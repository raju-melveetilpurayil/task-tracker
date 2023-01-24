import React from 'react'

const Button = ({ text, color }) => {
    const onClick=()=>{
        console.log("clicked");
    }
    return (
        <button 
        type='buttom' 
        style={{ backgroundColor: color }} 
        className="btn" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button

import React from 'react'

const Message = (message) => {
    const {text,uid,photoURL}=message
    return (
        <div className="message">
            <img src={photoURL} alt=""></img>
           
            
        </div>
    )
}

export default Message

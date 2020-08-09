import React from "react";
import './message-container.css';

function MessageContainer(){
    return(
        <div className={'message-container'}>
            <button type="button" className="btn">+</button>
        </div>
    );
}
export default MessageContainer;
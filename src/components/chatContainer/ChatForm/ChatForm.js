import React from "react";
import "./chatForm.css";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

function  ChatForm(){
    return(
        <div className={'chat-form'}>
             <input type={'text'} placeholder={'message'}/>

        </div>

    );
}

export default ChatForm;
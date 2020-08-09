import React from 'react';
import "./conversationlist.css"
function ConversationList(){
    return(
        <div className={'conversation-list'}>
      <div className={'conversation active'}>
        <img src={'https://verelq.am/uploads/news/edd80b5389d28905e6d69de32030640c.jpg'} alt={'Kim'} />
        <div className={'title-text'}>Kim Kardashian</div>
            <div className={'created-data'}>ogs04</div>
            <div className={'conversation-message'}> message this</div>
      </div>
        </div>
    );
}

export default ConversationList;
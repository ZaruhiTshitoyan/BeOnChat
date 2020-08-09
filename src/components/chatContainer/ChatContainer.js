import React from "react";
import "./chat-container.css";
import SearchContainer from "./search-container/Searchcontainer";
import ConversationList from "./ConversationList/ConversationList";
import MessageContainer from "./message-container/message-container";
import ChatTitle from "./chatTitle/ChatTitle";
import MessageList from "./messagelist/Messagelist";
import ChatForm from "./ChatForm/ChatForm";

function ChatContainer() {
  return (
    <div className={"chat-container"}>
      <SearchContainer />
      <ConversationList />
      <MessageContainer />
      <ChatTitle />
      <MessageList />
      <ChatForm />
    </div>

  );
}

export default ChatContainer;
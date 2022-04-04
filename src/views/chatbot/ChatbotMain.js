import React from "react";
import Chatbot from "./Chatbot/Chatbot";

function ChatbotMain() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <h1>CHAT BOT APP&nbsp;</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
        <Chatbot />
      </div>
    </div>
  )
}

export default ChatbotMain

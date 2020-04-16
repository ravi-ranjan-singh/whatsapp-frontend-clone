import React from 'react';
import Navbar from './Navbar_chatarea';
import MessageBox from './Messagebox';
import Message from './Message';

const ChatArea = () => {
  return (
    <div className="chat-area">
      <Navbar />
      <div className="chat-display">
        <div className="messages">
          <Message msgType="received" msg="How are you" />
          <Message msgType="sent" msg="I am good" />
          <Message msgType="sent" msg="How are you?" />
          <Message msgType="received" msg="fine bro" />
          <Message msgType="sent" msg="good" />
        </div>
        <MessageBox />
      </div>
    </div>
  );
};

export default ChatArea;

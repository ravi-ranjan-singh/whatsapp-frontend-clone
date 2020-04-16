import React from 'react';

const MessageBox = () => {
  return (
    <div className="msg-box">
      <i className="material-icons lg-36">sentiment_satisfied</i>
      <input type="text" name="message" id="msg" placeholder="Type a message" />
      <i className="material-icons md-18">mic</i>
    </div>
  );
};

export default MessageBox;

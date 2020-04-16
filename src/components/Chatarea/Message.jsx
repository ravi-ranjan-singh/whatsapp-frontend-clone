import React from 'react';

const Message = (props) => {
  return <div className={`message ${props.msgType}`}>{props.msg}</div>;
};

export default Message;

import React from 'react';

const ChatCard = (props) => {
  return (
    <div className="chat-card">
      <div className="chat-card-img">
        <img src={props.img} alt="" />
      </div>
      <div className="chat-card-details">
        <div className="chat-card-details-row1">
          <div style={{ fontSize: 20 }}>{props.name} </div>
          <div style={{ fontSize: 12, color: '#aaaaaa' }}>12:50 PM</div>
        </div>
        <div className="chat-card-details-row2">
          <div style={{ fontSize: 15, color: '#868686' }}>{props.msg}</div>
          <div>
            <i className="material-icons md-24">expand_more</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;

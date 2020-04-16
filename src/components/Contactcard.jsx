import React from 'react';

const ContactCard = (props) => {
  return (
    <div
      className="chat-card"
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <div className="chat-card-img">
        <img src={props.img} alt="" />
      </div>
      <div
        className="chat-card-details"
        style={{
          borderBottom: '1px solid rgb(235, 235, 235)',
          borderTop: '1px solid rgb(235, 235, 235)',
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <div className="chat-card-details-row1">
          <div style={{ fontSize: 20 }}> {props.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

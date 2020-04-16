import React from 'react';
import Navbar from './Navbar_sidebar';
import SearchBox from './Searchbox';
import Search from './search';
import ChatCard from './Chatcard';

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <Navbar />
      {props.searchBoxClicked ? (
        <Search />
      ) : (
        <SearchBox onHandleSearchBoxType={props.onHandleSearchBoxType} />
      )}

      {props.contacts.map((contact) => (
        <ChatCard
          name={contact.name}
          msg={contact.message}
          img={require('./../../dist/img/' + contact.imgName)}
        />
      ))}
    </div>
  );
};

export default SideBar;

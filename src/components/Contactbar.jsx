import React from 'react';
import SearchBox from './Sidebar/Searchbox';
import Search from './Sidebar/search';
import ContactCard from './Contactcard';
import { Link } from 'react-router-dom';

const ContactBar = (props) => {
  return (
    <div className="Contact_bar">
      <div
        className="New_contact"
        style={{
          backgroundColor: '#00BFA5',
          color: 'white',
          height: 108,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: 10,
        }}
      >
        <Link to="/">
          <i
            className="material-icons md-18"
            style={{ color: 'white', top: 3, paddingRight: '30px' }}
          >
            arrow_back
          </i>
        </Link>
        <h4>New Chat</h4>
      </div>
      {props.searchBoxClicked ? (
        <Search />
      ) : (
        <SearchBox onHandleSearchBoxType={props.onHandleSearchBoxType} />
      )}
      <br />
      <ContactCard name="Tony" img={require('./../dist/img/tony.jpg')} />
      <br />
      <ContactCard name="Bruce" img={require('./../dist/img/bruce.jpg')} />
      <br />
      <ContactCard name="Steve" img={require('./../dist/img/steve.jpg')} />
      <br />
      <ContactCard name="Natasha" img={require('./../dist/img/natasha.jpg')} />
      <br />
      <ContactCard name="Thor" img={require('./../dist/img/thor.jpeg')} />
      <br />
      <ContactCard name="Clint" img={require('./../dist/img/clint.jpg')} />
    </div>
  );
};

export default ContactBar;

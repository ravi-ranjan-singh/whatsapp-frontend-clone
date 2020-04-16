import React from 'react';

const SearchBox = (props) => {
  return (
    <div className="search-box" id="1" onClick={props.onHandleSearchBoxType}>
      <div className="input-area">
        <i className="material-icons md-18">search</i>
        <span style={{ paddingLeft: '30px' }}>Search or start a new chat</span>
      </div>
    </div>
  );
};

export default SearchBox;

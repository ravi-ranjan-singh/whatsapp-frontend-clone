import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SideBar from './components/Sidebar/Sidebar';
import ContactBar from './components/Contactbar';
import ChatArea from './components/Chatarea/Chatarea';

class App extends Component {
  state = {
    searchBoxClicked: false,
    contacts: [
      {
        name: 'Tony Stark',
        message: 'Love you 3000',
        imgName: 'tony.jpg',
      },
      {
        name: 'Bruce Banner',
        message: 'Thanos is comming',
        imgName: 'bruce.jpg',
      },
      {
        name: 'Thor Odison',
        message: 'Bring Me thanos',
        imgName: 'thor.jpeg',
      },
      {
        name: 'Steve Roggers',
        message: 'I can do it all day',
        imgName: 'steve.jpg',
      },
      {
        name: 'Clint Barton',
        message: 'I m the arrow guy',
        imgName: 'clint.jpg',
      },
      {
        name: 'Natasha Rommanof',
        message: 'Hey of to a mission',
        imgName: 'natasha.jpg',
      },
    ],
  };
  handleSearchBoxClicked = (e) => {
    e.stopPropagation();
    this.setState({
      searchBoxClicked: true,
    });
  };

  handleSearchBoxClickedFalse = (e) => {
    if (e.target.id === 'search1') {
      return;
    }
    this.setState({
      searchBoxClicked: false,
    });
  };

  render() {
    return (
      <div className="App" onClick={this.handleSearchBoxClickedFalse}>
        <Switch>
          <Route path="/newchat" component={ContactBar} />
          <Route
            path="/"
            component={(props) => (
              <SideBar
                onHandleSearchBoxType={this.handleSearchBoxClicked}
                searchBoxClicked={this.state.searchBoxClicked}
                contacts={this.state.contacts}
                {...props}
              />
            )}
          />
        </Switch>

        <ChatArea></ChatArea>
      </div>
    );
  }
}

export default App;

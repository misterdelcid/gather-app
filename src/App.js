//React & Redux
import React, { Component } from 'react';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

//Components
import Header from './Header';
import SideBarNav from './SideBarNav';

import Footer from './Footer';

//Stylesheet
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        posts: [
          {
            title: "title1",
            entry: "entry1"
          },
          {
            title: "title2",
            entry: "entry2"
          },
          {
            title: "title3",
            entry: "entry3"
          },
        ]

      }
  }

  handleNewPostSubmit = (event) => {
    event.preventDefault();
    this.setState({
      posts: this.state.posts.concat([{
        title: event.target.elements.title.value,
        entry: event.target.elements.entry.value,
        timestamp: this.timeStamp,
      }])
    });
    this.handleClearPost(event);
  }

handleClearPost = (event) => {
  event.preventDefault();
  this.refs.title.value = "";
  this.refs.entry.value = "";
}

 timeStamp = new Date();

  render() {
    return (
      <div className="App-container">
        <Header />
        <SideBarNav />

        <Footer />
      </div>
    );
  }
}

export default App;

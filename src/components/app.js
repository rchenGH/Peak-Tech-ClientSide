import React, {Component} from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';
import Directory from '../containers/directory.js';
import UserNavBar from '../containers/usernavbar';
import Events from '../containers/events.js';
import Footer from '../containers/footer.js';
import News from '../containers/news.js';
import About from '../containers/about.js';
import SignIn from '../containers/signin.js';
import SignUp from '../containers/signup.js';


class App extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <Directory />
        <Events />
        <News />
        <Footer />
        <About />
        <SignIn />
        <SignUp />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen,
    eventsOpen: state.eventsOpen,
    newsOpen: state.newsOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

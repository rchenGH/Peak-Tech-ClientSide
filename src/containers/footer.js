import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index';

class Footer extends React.Component {

  openSignIn(){
    this.props.openSignInAction();
  }

  openSignUp(){
    this.props.openSignUpAction();
  }

  openAbout(){
    this.props.openAboutAction();
  }

  render() {
    return (


    <div className="footer-nav fixed-bottom">
      <div className =" site-info">
        <div className="copyright-column">
          <a href="#" onClick={()=>this.openSignIn()}>Sign In</a>
          <a href="#" onClick={()=>this.openSignUp()}>Sign Up</a>
          <a href="#" onClick={()=>this.openAbout()}>About</a>
        </div>

          <div className="author-column">
            Built and maintained by students from&nbsp;
            <a href="https://codecore.ca/">
              CodeCore
            </a>
          </div>
      </div>
    </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openSignInAction: () => { dispatch(actions.openSignIn())},
    openSignUpAction: () => { dispatch(actions.openSignUp())},
    openAboutAction: () => { dispatch(actions.openAbout())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';
import {Token} from '../requests/tokens';

class SignIn extends React.Component {
  constructor(){
    super();
    this.state = {
      email: "",
      password: ""
    }

    this.createToken = this.createToken.bind(this);
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      [event.target.name]: event.target.value,
    });
    this.setState(newState);
  }


  createToken() {
    const {onSignIn = () => {}} = this.props;
    const {email, password} = this.state;
    Token
      .create({email, password})
      .then(data => {
        if (!data.error) {
          const {jwt} = data;
          localStorage.setItem('jwt', jwt);
          //redirect
          onSignIn();
        }
      });
      this.props.createTokenAction();
      const newState = Object.assign({}, this.state, {
      email: "", password: "",
      });
      this.setState(newState);
  }

  render() {
    return (
      <div className={this.props.signInOpen ? "signin-open" : "signin-closed"}>
        <form>
          <p className="contact-header">SIGN IN</p>
          <hr className="rule"/>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" id="input_email" name="email" className="form-control" placeholder="E-MAIL" onChange={this.handleChange.bind(this)} value={this.state.email}/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12">
              <input type="text" className="form-control" name="password" id="input_last_name" onChange={this.handleChange.bind(this)} value={this.state.password} placeholder="PASSWORD"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-12 button-column">
              <button type="button" id="form-submit" onClick={()=>this.createToken()}>SUBMIT</button>
            </div>
          </div>
          </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    signInOpen: state.signInOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTokenAction: () => { dispatch(actions.createToken())},
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

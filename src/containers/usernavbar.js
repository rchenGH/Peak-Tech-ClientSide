import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../actions/index';

class UserNavBar extends Component {

  openDirectory(){
    this.props.openDirectoryAction();
  }

  openEvents(){
    console.log(this.props.admin)
    this.props.openEventsAction();
  }

  openNews(){
    this.props.openNewsAction();
  }

  openAdminEvents(){
    this.props.openAdminEventsAction();
  }

  openAdminNews(){
    this.props.openAdminNewsAction();
  }

  openAdminTechnologies(){
    this.props.openAdminTechnologiesAction();
  }

  openAdminUsers(){
    this.props.openAdminUsersAction();
  }


  collapseOpen(){
    let button = document.querySelector('.navbar-toggler').classList
    let navdrop = document.querySelector('.navbar-toggler').nextSibling.classList
      console.log(navdrop)
        button.value = "navbar-toggler collapsed"
        navdrop.value ="collapse navbar-collapse show"
  }
  collapseClose(){
    let button = document.querySelector('.navbar-toggler').classList
    let navdrop = document.querySelector('.navbar-toggler').nextSibling.classList
      console.log(navdrop)
        button.value = "navbar-toggler"
        navdrop.value ="collapse navbar-collapse"

  }

  render(){

    if(this.props.admin){
      return(
        <nav className="navbar navbar-expand-md fixed-top" id="navigation">
          <a className="navbar-brand" id="header" href="#">
            <img className="logo" src="images/peaktechlogo.png"/>
          </a>
          <button className="navbar-toggler" type="button" onMouseEnter={()=> this.collapseOpen()} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
            MENU
          </button>
          <div id="dropshow" className="collapse navbar-collapse" id="navbarNavDropdown" onMouseLeave={()=> this.collapseClose()}>
            <ul className="navbar-nav">
              <li className="nav-item nav-admin">
                ADMIN PANEL:
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={()=>this.openDirectory()}>ORGANIZATIONS<span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openAdminEvents()}>EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openAdminNews()}>NEWS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openAdminUsers()} >USERS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openAdminTechnologies()}>TECHNOLOGIES</a>
              </li>
            </ul>
          </div>
        </nav>
      )
    }

    return (
        <nav className="navbar navbar-expand-md fixed-top" id="navigation">
          <a className="navbar-brand" id="header" href="#">
            <img className="logo" src="images/peaktechlogo.png"/>
          </a>
          <button className="navbar-toggler" type="button" onMouseEnter={()=> this.collapseOpen()} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
            MENU
          </button>
          <div id="dropshow" className="collapse navbar-collapse" id="navbarNavDropdown" onMouseLeave={()=> this.collapseClose()}>
            <ul className="navbar-nav">

              <li className="nav-item active">
                <a className="nav-link" href="#" onClick={()=>this.openDirectory()}>DIRECTORY <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openEvents()}>EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>this.openNews()}>NEWS</a>
              </li>
            </ul>
          </div>
        </nav>

    )
  }
};

const mapStateToProps = (state) => {
  return {
    directoryOpen: state.directoryOpen,
    eventsOpen: state.eventsOpen,
    newsOpen: state.newsOpen,
    adminEventsOpen: state.adminEventsOpen,
    adminNewsOpen: state.adminNewsOpen,
    adminTechnologiesOpen: state.adminTechnologiesOpen,
    adminUsersOpen: state.adminUsersOpen,
    admin: state.admin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDirectoryAction: () => { dispatch(actions.openDirectory())},
    openEventsAction: () => { dispatch(actions.openEvents())},
    openNewsAction: () => { dispatch(actions.openNews())},
    openAdminEventsAction: () => { dispatch(actions.openAdminEvents())},
    openAdminNewsAction: () => { dispatch(actions.openAdminNews())},
    openAdminTechnologiesAction: () => { dispatch(actions.openAdminTechnologies())},
    openAdminUsersAction: () => { dispatch(actions.openAdminUsers())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNavBar);

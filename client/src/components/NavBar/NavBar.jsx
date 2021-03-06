import "./navBar.scss";

import React from 'react'
import { slide as Menu } from 'react-burger-menu'


export default class NavBar extends React.Component {

  render() {

    console.log(this.props.config);

    let hasRemote = Object.keys(this.props.config).length ?
    this.props.config.config.web_server_url : true ;

    let is_auth = Object.keys(this.props.config).length ?
    this.props.config.user.is_auth : false ;

    return (
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
            <a className="logo-menu" href="/">
              <img src="/images/ludobox-icon.png"/>
            </a>

            {/* <a href="/">Ludobox</a> */}

            <a href="/games">Games</a>
            <a href="/recent">Recent</a>

            {
              is_auth ?
                <a href="/create">Add game</a>
              :
              null
            }

            {
              hasRemote ?
                <a href="/download">Download</a>
              :
              null
            }

            <a href="/about">About</a>
            <a href="/help">Help</a>

            <div className="log-actions">
              {
                is_auth ?
                <span>
                  <a href="/profile">Profile</a>
                  <a href="/logout">Logout</a>
                </span>
                :
                <span>
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
                </span>
              }
            </div>

          <a disabled className="version" href="" style={{color:"#ccc", pointerEvents: "none", cursor: "default"}}>v{this.props.config.version}</a>
      </Menu>
    )
  }
}

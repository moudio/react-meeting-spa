import React, { Component } from 'react';

import { Link } from '@reach/router';
import { FaUsers } from 'react-icons/fa';

export default class Navigation extends Component {
  render() {
    const { user, logoutUser } = this.props;
    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <FaUsers className="mr-1" />
            {' '}
            Meeting Log
          </Link>

          <div to="/meetings" className="navbar-nav ml-auto">
            {user && (
              <Link className="nav-item nav-link" to="/meetings">
                meetings
              </Link>
            )}
            {!user && (
              <Link to="/login" className="nav-item nav-link">
                log in
              </Link>
            )}
            {!user && (
              <Link
                to="register"
                className="nav-item nav-link"
                href="/register"
              >
                register
              </Link>
            )}

            {user && (
              <Link
                to="/logout"
                className="nav-item nav-link"
                onClick={(e) => logoutUser(e)}
              >
                log out
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

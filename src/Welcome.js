import React, { Component } from 'react';
import { Link } from '@reach/router';

class Welcome extends Component {
  render() {
    const { userName, logoutUser } = this.props;
    return (
      <div className="text-center mt-3">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome
          {' '}
          {userName}
        </span>
        <Link
          to="/logout"
          className="font-weight-bold text-primary pl-1"
          onClick={(e) => logoutUser(e)}
        >
          log out
        </Link>
      </div>
    );
  }
}

export default Welcome;

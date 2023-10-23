import React from 'react';
import './Account.css'; // Import a custom CSS file for styling

function Account() {
  return (
    <div className="container account-container">
      <div className="text-center mt-5">
        <h1 className="display-4 account-title">My Account</h1>
        <p className="lead account-welcome">Welcome, User Name!</p>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <div className="card account-card">
            <div className="card-body">
              <h2 className="card-title text-center">Events Created</h2>
              <ul className="list-group">
                <li className="list-group-item account-event">Event 1</li>
                <li className="list-group-item account-event">Event 2</li>
                <li className="list-group-item account-event">Event 3</li>
                <li className="list-group-item account-event">Event 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;

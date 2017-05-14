import React from 'react';

export default class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li>Home</li>
              <li>Stuff</li>
              <li>Contact</li>
            </ul>
            <div className="content">
            </div>
          </div>
        );
    }
}
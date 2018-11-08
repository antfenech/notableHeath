import React, { Component } from 'react';
import { Provider } from 'react-redux';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, id) {
    e.preventDefault();
    this.props.handleDrClick(id)
  }

  render() {
    return (
      <div className="physicians">
        <img src="http://notablehealth.com/images/notable-logo.svg" height="20" alt="logo" />
        <h3>PHYSICIANS</h3>
        {
          this.props.doctors.map((doc, i) => (
            <div
              className={`doc${doc.id === this.props.selected ? '--selected' : ''}`}
              key={doc.id}
              onClick={e => this.handleClick(e, doc.id)}
            >
              <span className="dot" />
              {doc.name.last}, {doc.name.first}
            </div>
          ))
        }
        <button>Logout</button>
      </div>
    )
  }
}

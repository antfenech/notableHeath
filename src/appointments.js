import React, { Component } from 'react';
import { Provider } from 'react-redux';


export default class App extends Component {
  render() {
    return (
      <div className="appointments">
        {this.props.doctor.name && (<h1>DR. {this.props.doctor.name.first} {this.props.doctor.name.last}</h1>)}
        {this.props.doctor.email && <h4>{this.props.doctor.email}</h4>}

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Time</th>
              <th>Kind</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.appointments.map((apt, i) => (
                <tr key={apt.id}>
                  <td>{i + 1}</td>
                  <td>{apt.patient}</td>
                  <td>{apt.time}</td>
                  <td>{apt.kind}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

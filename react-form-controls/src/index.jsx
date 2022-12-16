import React from 'react';
import ReactDom from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('username:', this.state.username);
    console.log('password:', this.state.password);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:
          <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange}></input>
        </label>
        <label>Password:
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<RegistrationForm />);

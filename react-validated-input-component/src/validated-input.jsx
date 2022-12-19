import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  errMessage() {
    const { password } = this.state;
    if (password === '') {
      return 'A password is required';
    } else if (password.length < 8) {
      return 'Your password is too short';
    } else if (password.length >= 8) {
      return '';
    }
  }

  showCheckMark() {
    const { password } = this.state;
    if (!password) {
      return 'fa-x x';
    } else if (password.length < 8) {
      return 'fa-x x';
    } else if (password.length >= 8) {
      return 'fa-check';
    }
  }

  render() {
    const errMessage = this.errMessage();
    const icon = this.showCheckMark();
    return (
      <form>
        <label htmlFor="password">Password</label>
        <div>
          <input type="password" id="password" value={this.state.value} onChange={this.handlePassword}></input>
          <i className={`fa-solid ${icon}`}></i>
          <p className="errMessage">{errMessage}</p>
        </div>
      </form>
    );
  }
}

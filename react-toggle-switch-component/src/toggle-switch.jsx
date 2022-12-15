
import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => {
      return { isOn: !state.isOn };
    });
  }

  render() {
    const toggle = (this.state.isOn) ? 'on' : 'off';
    return (
      <div className='container' onClick={this.toggle}>
        <div className={'pill ' + toggle}>
          <div className={'switch ' + toggle}></div>
        </div>
        <h1>{toggle.toUpperCase()}</h1>
      </div>
    );
  }
}

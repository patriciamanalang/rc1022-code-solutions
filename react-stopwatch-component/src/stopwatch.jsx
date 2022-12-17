import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onPlay: false,
      count: 0,
      intervalID: null
    };
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  render() {
    const icon = (this.state.onPlay) ? 'pause' : 'play';
    return (
      <div className="container">
        <div className="watch" onClick={this.handleReset}>
          <h1>{this.state.count}</h1>
        </div>
        <i onClick={this.handleIconClick} className={'fa-sharp fa-solid fa-' + icon}></i>
      </div>
    );
  }

  handleIconClick() {
    if (!this.state.onPlay) {
      this.setState({ onPlay: true });
      this.intervalID = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    } else {
      this.setState({ onPlay: false });
      clearInterval(this.intervalID);
    }
  }

  handleReset() {
    this.setState({ count: 0 });
  }
}

import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numClicks: this.state.numClicks + 1 });
  }

  render() {
    if (this.state.numClicks <= 3) {
      return <button onClick={this.handleClick} className="button-three">Hot Button</button>;
    } else if (this.state.numClicks <= 6) {
      return <button onClick={this.handleClick} className="button-six">Hot Button</button>;
    } else if (this.state.numClicks <= 9) {
      return <button onClick={this.handleClick} className="button-nine">Hot Button</button>;
    } else if (this.state.numClicks <= 12) {
      return <button onClick={this.handleClick} className="button-twelve">Hot Button</button>;
    } else if (this.state.numClicks <= 15) {
      return <button onClick={this.handleClick} className="button-fifteen">Hot Button</button>;
    } else if (this.state.numClicks > 15) {
      return <button onClick={this.handleClick} className="button-eighteen">Hot Button</button>;
    }
  }
}

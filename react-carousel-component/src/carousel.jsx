import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      intervalId: null
    };

    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickCircles = this.handleClickCircles.bind(this);

  }

  componentDidMount() {
    this.setCarouselInterval();
  }

  setCarouselInterval() {
    const intervalId = setInterval(() => {
      this.handleClickRight();
    }, 3000);
    this.setState({ intervalId });
  }

  createProgressCircles() {
    return (this.props.images.map((url, index) => {
      let circleClass;
      if (index === this.state.imageIndex) {
        circleClass = 'fas fa-circle';
      } else {
        circleClass = 'far fa-circle';
      }
      return (
        <i key={url} id={index} className={circleClass} onClick={this.handleClickCircles}></i>
      );
    })
    );
  }

  handleClickCircles(event) {
    clearInterval(this.state.intervalId);
    this.setState({ imageIndex: parseInt(event.target.id) });
    this.setCarouselInterval();
  }

  handleClickRight() {
    clearInterval(this.state.intervalId);
    if (this.state.imageIndex === 4) {
      this.setState({ imageIndex: 0 });
    } else {
      const newImageIndex = this.state.imageIndex + 1;
      this.setState({ imageIndex: newImageIndex });
    }
    this.setCarouselInterval();
  }

  handleClickLeft() {
    clearInterval(this.state.intervalId);
    if (this.state.imageIndex === 0) {
      this.setState({ imageIndex: 4 });
    } else {
      const newImageIndex = this.state.imageIndex - 1;
      this.setState({ imageIndex: newImageIndex });
    }
    this.setCarouselInterval();
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-third display-arrow-left'>
            <i className='fas fa-angle-left' onClick={this.handleClickLeft}></i>
          </div>
          <div className='column-third text-align-center'>
            <img src={this.props.images[this.state.imageIndex]}></img>
          </div>
          <div className='column-third display-arrow-right'>
            <i className='fas fa-angle-right' onClick={this.handleClickRight}></i>
          </div>
        </div>
        <div className='row'>
          <div className='column-full text-align-center progress-circles'>
            {this.createProgressCircles()}
          </div>
        </div>
      </div>
    );
  }
}

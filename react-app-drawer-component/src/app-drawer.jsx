import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.drawer = this.drawer.bind(this);
  }

  drawer() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const modal = this.state.isOpen ? '' : 'hidden';
    return (
      <div className='container'>
        <i onClick={this.drawer} className="fa-solid fa-bars"></i>
        <div className={modal}>
          <div onClick={this.drawer} className="shadow"></div>
          <nav className="menu">
            <h1>Hogwarts Houses</h1>
            <div onClick={this.drawer}>
              <a>Gryffindor</a>
              <a>Hufflepuff</a>
              <a>Ravenclaw</a>
              <a>Slytherin</a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

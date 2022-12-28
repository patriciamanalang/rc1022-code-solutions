import React from 'react';
export default class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTab: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.openTab === event.target.dataset.topic) {
      this.setState({ openTab: null });
    } else {
      this.setState({ openTab: event.target.dataset.topic });
    }
  }

  render() {
    const reactTopics = this.props.topics.map(topic => {
      const hide = this.state.openTab === topic.name ? '' : 'hidden';
      return (
        <div key={this.props.topics.indexOf(topic)}>
          <h1 onClick={this.handleClick} data-topic={topic.name}>{topic.name}</h1>
          <p className={hide}>{topic.description}</p>
        </div>
      );
    }
    );

    return (
      <div className='container'>
        {reactTopics}
      </div>
    );
  }
}

import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(usersData => this.setState({
        users: usersData,
        isLoading: false
      }))
      // eslint-disable-next-line no-console
      .catch(err => console.err('Fetch Failed!', err));

  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;

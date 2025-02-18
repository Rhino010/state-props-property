import { useState } from 'react';

import './App.css'


class UserProfile extends Component {
  constructor(props) {
      super(props);
      this.state = { name: 'Alex' };
  }

  // Incorrect function
  changeName() {
      this.state.name = 'Charlie';
  }

  render() {
      return (
          <div>
              <h1>User Profile</h1>
              <p>Name: {this.state.name}</p>
              <button onClick={this.changeName}>Change Name</button>
          </div>
      );
  }
}

export default App;



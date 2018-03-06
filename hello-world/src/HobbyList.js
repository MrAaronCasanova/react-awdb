import React, { Component } from 'react';

class HobbyList extends Component {
  render() {
    const style = { fontSize: '1.5em' };
    const hobbies = ['Sleeping', 'Eating', 'Cuddling'];
    return (
      <ul>
        {hobbies.map((hobbie, idx) => <li key={idx} style={style}>{hobbie}</li>)}
      </ul>
    );
  }
}

export default HobbyList;

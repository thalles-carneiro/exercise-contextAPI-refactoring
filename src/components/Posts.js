import React, { Component } from 'react';
import { Consumer } from '../context/Provider';

class Posts extends Component {
  render() {
    return (
      <Consumer>
        {
          ({posts}) => (
            <ul>
              {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
            </ul>
          )
        }
      </Consumer>
    );
  }
} 

export default Posts;

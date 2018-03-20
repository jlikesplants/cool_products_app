import React, { Component } from 'react';
import axios from 'axios'

class List extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  
  componentDidMount() {
    axios.get('http://localhost:3001/products/index.json')
    .then(response => {
      console.log(response);
      this.setState({products: response.data})
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="list">
      </div>
    );
  }
}

export default List;

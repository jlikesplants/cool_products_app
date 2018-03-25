import React, { Component } from 'react';
import axios from 'axios'
import './Table.css';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  
  componentDidMount() {
    axios.get('http://localhost:3001/products/index.json')
    .then(response => {
      this.setState({products: response.data})
    })
  }
  
  render() {
    return (
      <div className="wrapper">
        <table className="Table">
          <thead></thead>
          <tbody>
            {this.state.products.map((product) => 
              <tr key={product.id}>
                <td>{product.product_name}</td>
                <td>{product.sku}</td>
                <td>{product.advertiser_name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

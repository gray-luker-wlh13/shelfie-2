import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
      editProduct: {}
    }
  }

//get inventory from database
  componentDidMount(){
    this.getInventory()
  }

  selectProduct = (i) => {
    this.setState({
      editProduct: i
    })
  }

  updateProducts = (product_id, body) => {
    axios.put(`/api/product/${product_id}`, body).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className='main'>
        <Dashboard 
          inventory={this.state.inventory}
          getFn={this.getInventory}
          selectFn={this.selectProduct}
        />
        <Form getFn={this.getInventory} updateFn={this.updateProducts} editProduct={this.state.editProduct}/>
        </div>
      </div>
    );
  }
}

export default App;

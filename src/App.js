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
      i: 0
    }
  }

//get inventory from database
  componentDidMount(){
    this.getInventory()
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
        />
        <Form getFn={this.getInventory} i={this.state.i}/>
        </div>
      </div>
    );
  }
}

export default App;

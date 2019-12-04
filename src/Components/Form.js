import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            product_name: '',
            price: 0,
            img: ''
        }
    }

//make handle change methods for all inputs from state
    handleName = (name) => {
        this.setState({
            product_name: name
        })
    }

    handlePrice = (val) => {
        this.setState({
            price: val
        })
    }

    handleImg = (val) => {
        this.setState({
            img: val
        })
    }

    //cancel handler
    handleCancel = () => {
        this.setState({
            product_name: '',
            price: 0,
            img: ''
        })
    }

    createProduct = (body) => {
        axios.post('/api/product', body).then(res => {
            return (
                this.props.getFn(res.data)
                // this.handleCancel()
            )
        })
    }

    render(){
        const {product_name, price, img} = this.state
        return(
            <div className='form'> 
               <div className='input-container'>
                   Image URL: <input onChange={e => this.handleImg(e.target.value)}/>
                   <br/>
                   Product Name: <input onChange={e => this.handleName(e.target.value)}/>
                   <br/>
                   Price: <input onChange={e => this.handlePrice(e.target.value)} placeholder={this.state.price}/>
                   <br/>
               </div>
               <div className='button-container'>
                   <button>Cancel</button>
                   <button onClick={() => this.createProduct({product_name, price, img})}>Add to Inventory</button>
               </div>
            </div>
        )
    }
}

export default Form;
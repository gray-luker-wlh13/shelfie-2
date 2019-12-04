import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            product_name: '',
            price: 0,
            img: '',
            currentId: this.props.i
        }
    }

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
                this.props.getFn(res.data),
                this.handleCancel()
            )
        })
    }

    render(){
        const {product_name, price, img} = this.state
        return(
            <div className='form'> 
               <div className='input-container'>
                   Image URL: <input value={this.state.img} onChange={e => this.handleImg(e.target.value)}/>
                   Product Name: <input value={this.state.product_name} onChange={e => this.handleName(e.target.value)}/>
                   Price: <input value={this.state.price} onChange={e => this.handlePrice(e.target.value)} placeholder={this.state.price}/>
               </div>
               <div className='button-container'>
                   <button id='form-button' onClick={this.handleCancel}>Cancel</button>
                   <button onClick={() => this.createProduct({product_name, price, img})} id='form-button'>Add to Inventory</button>
               </div>
            </div>
        )
    }
}

export default Form;
import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: null,
            product_name: '',
            price: 0,
            img: '',
            edit: false
        }
    }

    componentDidUpdate(oldProps){
        // console.log(this.props.editProduct);
        let {product_id, product_name, price, img} = this.props.editProduct;
        if(oldProps.editProduct.product_id !== this.props.editProduct.product_id){
            this.setState({
                product_id,product_name,price,img,edit : true
            })
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleCancel = () => {
        this.setState({
            product_name: '',
            price: 0,
            img: '',
            edit: !this.state.edit
        })
    }

    handleSave = () => {
        const {product_name, price, img} = this.state;
        const {product_id} = this.props.editProduct;
        this.props.updateFn(product_id,{product_name, price, img})
        this.props.getFn()
        this.handleCancel()
        this.setState({
            edit: !this.state.edit
        })
    }

    createProduct = (body) => {
        axios.post('/api/product', body).then(res => {
            this.setState({
                inventory: res.data
            })
            this.props.getFn()
            this.handleCancel()
        })
    }

    render(){
        const {product_name, price, img} = this.state
        return(
            <div className='form'> 
               <div className='input-container'>
                   Image URL: <input value={this.state.img} onChange={e => this.handleInput(e)} type="text" name='img'/>
                   Product Name: <input value={this.state.product_name} onChange={e => this.handleInput(e)} type="text" name='product_name'/>
                   Price: <input value={this.state.price} onChange={e => this.handleInput(e)} placeholder='0' type="number" name='price'/>
               </div>
               <div className='button-container'>
                   <button id='form-button' onClick={this.handleCancel}>Cancel</button>
                   {!this.state.edit ? <button onClick={() => this.createProduct({product_name, price, img})} id='form-button'>Add to Inventory</button> : <button id='form-button' onClick={() => this.handleSave()}>Save Changes</button>}
               </div>
            </div>
        )
    }
}

export default Form;
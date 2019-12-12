import React, {Component} from 'react';

class Product extends Component {
    render(){
        const {img, name, price, id} = this.props
        return(
            <div className='product'>
                <img src={img} alt='' height='200px' width='200px'/>
                <div className='info'>
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                </div>
                <div className='product-btn'>
                    <button className='functional-button' onClick={() => this.props.deleteFn(id)}>Delete</button>
                    <button className='functional-button' onClick={() => this.props.select(this.props.product)}>Edit</button>
                </div>
            </div>
        )
    }
}

export default Product;
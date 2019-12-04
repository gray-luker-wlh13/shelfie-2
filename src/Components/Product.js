import React, {Component} from 'react';

class Product extends Component {
    render(){
        const {img, name, price} = this.props
        return(
            <div className='product'>
                <img src={img} alt='' height='200px'/>
                <div className='info'>
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                </div>
                <div className='product-btn'>
                    <button className='functional-button'>Delete</button>
                    <button className='functional-button'>Edit</button>
                </div>
            </div>
        )
    }
}

export default Product;
import React, {Component} from 'react';

class Product extends Component {
    render(){
        const {img, name, price} = this.props
        return(
            <div className='product'>
                <img src={img} alt=''/>
                <h2>{name}</h2>
                <h3>${price}</h3>
            </div>
        )
    }
}

export default Product;
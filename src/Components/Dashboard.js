import React, {Component} from 'react';
import Product from './Product';
import axios from 'axios';

class Dashboard extends Component {

    deleteProduct = (id) => {
        axios.delete(`/api/inventory/${id}`).then(res => {
            return (
                this.props.getFn(res.data)
            )
        })
    }

    render(){
        let inventory = this.props.inventory.map((e, i) => {
            return (
                <Product 
                    key={i}
                    product={e}
                    name={e.product_name}
                    price={e.price}
                    img={e.img}
                    deleteFn={this.deleteProduct}
                    id={e.product_id}
                />
            )
        })
        return(
            <div className='dashboard'>
                {inventory}
            </div>
        )
    }
}

export default Dashboard;
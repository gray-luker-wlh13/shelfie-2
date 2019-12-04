import React, {Component} from 'react';
import Product from './Product';

class Dashboard extends Component {
    render(){
        let inventory = this.props.inventory.map((e, i) => {
            return (
                <Product 
                    key={i}
                    product={e}
                    name={e.product_name}
                    price={e.price}
                    img={e.img}
                />
            )
        })
        return(
            <div className='dashboard'>
                Dashboard
                {inventory}
            </div>
        )
    }
}

export default Dashboard;
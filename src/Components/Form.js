import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

//make handle change methods for all inputs from state

    render(){
        return(
            <div className='form'> 
                Form
            </div>
        )
    }
}

export default Form;
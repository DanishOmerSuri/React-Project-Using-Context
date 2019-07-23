import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContactRefs extends Component {

    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (dispatch,e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
            id: uuid()
        };

        dispatch({type: 'ADD_CONTACT', payload: contact});

        console.log(contact);
    };

    static defaultProps = {
        name: '',
        email: '',
        phone: ''
    };

    render() {
        const { name, email, phone } = this.props;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                            type="text"
                                            name="name"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Name..."
                                            defaultValue={name}
                                            ref={this.nameInput}    
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            type="email"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Email..."
                                            defaultValue={email}
                                            ref={this.emailInput}  
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input 
                                            type="text"
                                            name="phone"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Phone..."
                                            defaultValue={phone}
                                            ref={this.phoneInput} 
                                        />
                                    </div>
                                    <input 
                                        type="submit" 
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContactRefs;
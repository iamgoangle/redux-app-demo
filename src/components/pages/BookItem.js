import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart, updateCart } from '../../actions/cartActions';

class BookItem extends Component {
    handleCart() {
        const book = [...this.props.cart, {
            id: this.props.id,
            title: this.props.title,
            description: this.props.title,
            price: this.props.price,
            quantity: 1
        }];

        // check if cart is empty
        if(this.props.cart.length > 0){
            // cart is not emoty
            let _id = this.props.id;
            let cartIndex = this.props.cart.findIndex((cart) => {
                return cart.id === _id;
            });

            if (cartIndex === -1) {
                // but not match selected book
                this.props.addToCart(book);
            } else {
                // update quantity
                this.props.updateCart(_id, 1);
            }
        } else {
            // cart is empty
            this.props.addToCart(book);
        }
    }

    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <h2>{this.props.price}</h2>
                        <Button onClick={() => this.handleCart()} bsStyle='primary'>Buy</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
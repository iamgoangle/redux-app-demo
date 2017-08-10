import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../../actions/cartActions';

class BookItem extends Component {
    handleCart() {
        console.log(this.props);

        const book = [...this.props.cart, {
            id: this.props.id,
            title: this.props.title,
            description: this.props.title,
            price: this.props.price
        }];

        console.log(book);

        this.props.addToCart(book);
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

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        addToCart: addToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
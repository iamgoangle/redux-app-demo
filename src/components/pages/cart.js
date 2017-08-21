import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Button, ButtonGroup, Label } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem } from '../../actions/cartActions';

class Cart extends Component {
    onDelete (_id) {
        const currentCartItems = this.props.cart;
            
        let cartAfterDelete = currentCartItems.filter((cart) => {
            return cart.id !== _id;
        });

        console.log(cartAfterDelete);
        this.props.deleteCartItem(cartAfterDelete);
    }

    renderEmpty () {
        return (<div></div>);
    }

    renderCart () {
        const cartItemsList = this.props.cart.map((cartArr) => {
            return (
                <Panel key={cartArr.id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6>
                            <span>  </span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>usd. {cartArr.price}</h6>
                        </Col>

                        <Col xs={12} sm={2}>
                            <h6>qty. <Label bsStyle="success"></Label></h6>
                        </Col>
                        <Col xs={12} sm={4}>
                            <ButtonGroup style={{minWidth: '300px'}}>
                                <Button bsStyle="default" bsSize="small">
                                    -
                                </Button>
                                <Button bsStyle="default" bsSize="small">
                                    +
                                </Button>
                                <span>  </span>
                                <Button
                                    onClick={() => this.onDelete(cartArr.id)} 
                                    bsStyle="danger" 
                                    bsSize="small">DELETE</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            )
        }, this);

        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
            </Panel>
        )
    }

    render () {
        if (this.props.cart[0]) {
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
        deleteCartItem: deleteCartItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

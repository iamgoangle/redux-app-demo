import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Panel, Col, Row, Button, 
    ButtonGroup, Label, Modal
} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart } from '../../actions/cartActions';

class Cart extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false,
            modal: {
                title: 'Thank you!',
                body: 'Your order has been saved'
            }
        };
    }

    showModal () {
        this.setState({showModal: true});
    }

    closeModal () {
        this.setState({showModal: false});
    }

    onDelete (_id) {
        const currentCartItems = this.props.cart;
            
        let cartAfterDelete = currentCartItems.filter((cart) => {
            return cart.id !== _id;
        });

        this.props.deleteCartItem(cartAfterDelete);
    }

    onIncrement (_id) {
        this.props.updateCart(_id, 1);
    }

    onDecrement (_id, quantity) {
        if (quantity > 1) {
            this.props.updateCart(_id, -1);
        }
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
                            <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>
                        </Col>
                        <Col xs={12} sm={4}>
                            <ButtonGroup style={{minWidth: '300px'}}>
                                <Button 
                                    onClick={() => this.onDecrement(cartArr.id, cartArr.quantity)}
                                    bsStyle="default" 
                                    bsSize="small">
                                    -
                                </Button>
                                <Button 
                                    onClick={() => this.onIncrement(cartArr.id)}
                                    bsStyle="default" 
                                    bsSize="small">
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

        const confirmModalInstance = (
            <Modal show={this.state.showModal} onHide={() => this.close(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.state.modal.body}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Col xs={6}>
                        <h6>total: ${this.props.totalAmount}</h6>
                    </Col>
                    <Button onClick={() => this.closeModal(this)}>Close</Button>
                </Modal.Footer>
            </Modal>
        );

        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}

                <Row>
                    <Col xs={12}>
                        <h6>Total amount: ${this.props.totalAmount}</h6>
                        <Button 
                            onClick={() => this.showModal(this)} 
                            bsStyle="success" 
                            bsSize="small">
                            PROCEED TO CHECKOUT
                        </Button>
                    </Col>
                </Row>

                {confirmModalInstance}
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
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators ({
        deleteCartItem: deleteCartItem,
        updateCart: updateCart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

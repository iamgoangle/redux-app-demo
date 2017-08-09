import React, { Component } from 'react';
import { connect } from 'redux';
import { Panel, Col, Row, Well, Button } from 'react-bootstrap';

class Cart extends Component {
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
                        </Col>
                    </Row>
                </Panel>
            );
        });

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

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);

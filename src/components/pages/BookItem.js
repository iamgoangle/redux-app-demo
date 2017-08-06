import React, { Component } from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';

class BookItem extends Component {
    render() {
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <h2>{this.props.price}</h2>
                        <Button bsStyle='primary'>Buy</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

export default BookItem;
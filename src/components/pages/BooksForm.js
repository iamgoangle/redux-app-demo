import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ACTIONS
import { postBook } from '../../actions/bookActions';

class BooksForm extends Component {
    handleSubmit () {
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];

        this.props.postBook(book);
    }

    render () {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Title..."
                            ref="title" />
                    </FormGroup>

                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter Title..."
                            ref="description" />
                    </FormGroup>

                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter Price..."
                            ref="price" />
                    </FormGroup>

                    <Button onClick={() => this.handleSubmit()} bsStyle="primary">Save</Button>
                </Panel>
            </Well>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        postBook
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(BooksForm);
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ACTIONS
import { postBook, deleteBook } from '../../actions/bookActions';

class BooksForm extends Component {
    handleSubmit () {
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];

        this.props.postBook(book);
    }

    onDeleteBook () {
        const bookID = findDOMNode(this.refs.delete).value;
        this.props.deleteBook(bookID);
    }

    render () {
        const booksList = this.props.books.map((bookArr) => {
            return (
                <option key={bookArr.id}>{bookArr.id}</option>
            );
        });

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

                <Panel style={{marginTop: '25px'}}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book to delete</ControlLabel>
                        <FormControl ref="delete" componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            {booksList}
                        </FormControl>
                    </FormGroup>
                    <Button onClick={() => this.onDeleteBook(this)} bsStyle="danger">Delete</Button>
                </Panel>
            </Well>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postBook,
        deleteBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
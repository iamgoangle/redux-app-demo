import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React-Bootstrap component
import { Grid, Col, Row, Button } from 'react-bootstrap';

// ACTION CREATOR
import { getBooks } from '../../actions/bookActions';

import BookItem from './BookItem';
import BookForms from './BooksForm';

class BooksList extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        const booksList = this.props.books.map((book) => {
            return(
                <Col xs={12} sm={6} md={4} key={book.id}>
                    <BookItem 
                        id={book.id}
                        title={book.title}
                        description={book.description}
                        price={book.price} />
                </Col>
            )
        });

        return (
            <Grid>
                <Row>
                    <Col xs={12} sm={6}>
                        <BookForms />
                    </Col>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}

// subscribe the state of store
const mapStateToProps = (state) => {
    return {
        books: state.books.books
    }
}

// bind action creator with this component
// TODO: Read http://redux.js.org/docs/api/bindActionCreators.html
// TODO: https://stackoverflow.com/questions/41342540/what-is-difference-between-dispatch-and-bindactioncreators
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch);

    // it's acutally the same with below
    // return {
    //     getBooks: () => {
    //         dispatch(getBooks)
    //     }
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
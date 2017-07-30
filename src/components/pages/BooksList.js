import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component {
    render() {
        const booksList = this.props.books.map((book) => {
            return(
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <h2>{book.description}</h2>
                    <h2>{book.price}</h2>
                </div>
            )
        });

        return (
            <div>
                {booksList}
            </div>
        )
    }
}

// subscribe the state of store
const mapStateToProps = (state) => {
    return {
        books: state.books.books
    }
}

export default connect(mapStateToProps)(BooksList);
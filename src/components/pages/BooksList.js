import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ACTION CREATOR
import { getBooks } from '../../actions/bookActions';

class BooksList extends Component {
    componentDidMount() {
        this.props.getBooks();
    }

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
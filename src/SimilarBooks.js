import React from 'react';
import cover2 from './images/second-book.jpg';
import cover3 from './images/third-book.jpg';
import cover4 from './images/cover4.jpg';
import cover5 from './images/cover5.jpg';
import authors from './authors.json';

class SimilarBooks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 3,
      books: [
        { 
          'id': 1,
          'title': 'My second Book',
          'cover': cover2,
          'authors': authors,
        },
        { 
          'id': 2,
          'title': 'My third Book',
          'cover': cover3,
          'authors': authors,
        },
        { 
          'id': 3,
          'title': 'My fourth Book',
          'cover': cover4,
          'authors': authors,
        },
        { 
          'id': 4,
          'title': 'My fifth Book',
          'cover': cover5,
          'authors': authors,
        },
      ]
    };

    this.removeFromList = this.removeFromList.bind(this);
  }

  removeFromList(bookId) {
    this.setState((state) => ({
      books: state.books.filter(book => book.id != bookId)
    }));
  }

  render() {
    console.log('render SimilarBooks')
    const { books } = this.state
    
    return(
      <div>
        <h2>Similar Books</h2>
        <BooksList limit={this.state.limit} removeFromList={ this.removeFromList } books={ books } />
      </div>
    )
  }
}

export default SimilarBooks;

const BooksList = ({books, removeFromList, limit}) => (
  console.log('render BookList') || 
  <table>
    <tbody>
      {
        books.slice(0, limit).map(book => (
          <ListItem book={book} removeFromList={removeFromList} />
        ))
      }
    </tbody>
  </table>
)

const ListItem = React.memo(({book, removeFromList}) => (
  <tr key={book.id}>
    <Column>
      <Cover>{ book.cover }</Cover>
    </Column>

    <Column>{ book.title }</Column>
    <Column><button onClick={ () => removeFromList(book.id) }>Delete</button></Column>
  </tr>
))

const Column = ({ children }) => (
  <td>{ children }</td>
)

const Cover = ({ children }) => (
  <img style={ styles.cover } src={ children } />
)

const styles = {
  cover: {
    maxHeight: '100px',
  }
}
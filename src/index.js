import ReactDom from 'react-dom';
import React from 'react';

import App from './App';
import './index.css';
import authors from './authors.json';
import cover from './images/book-cover.png'

console.log(authors);

const book = {
    'title': 'My first Book',
    'description': 'This is my first book for leanpub app',
    'pages': 96,
    'language': 'english',
    'cover': cover,
    'authors': authors,
    'min_price': 99,
    'suggested_price': 199,
    'progress': 19,
    'amount': 1999,
    'desired_amount': 9999,
    'subscribers': 1002
}

ReactDom.render(
  <App book={book}/>,
  document.getElementById('root')
)
import ReactDom from 'react-dom';
import React from 'react';

import App from './App';
import './index.css';
import authors from './authors.json';
import cover from './images/book-cover.png';
import AuthContext from './AuthContext';

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

const currentUser = { 
  'email': 'user@mail.ru', 
  'firstName': 'Ivan', 
  'lastName': 'Ivanov', 
  'avatarUrl': 'https://media.gettyimages.com/photos/kitten-sitting-on-dog-picture-id979081604'
}

ReactDom.render(
  <AuthContext.Provider value={{'currentUser': currentUser}}>
    <App book={book}/>
  </AuthContext.Provider>,
  document.getElementById('root')
)
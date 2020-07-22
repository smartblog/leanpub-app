import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookCard from './BookCard';

test('renders book in a card', () => {
    const author = {
        'name': 'Ivanov I.I.',
        'email': 'ivan@ivanov.ru',
        'avatar': 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        'about': 'Text about Ivanov. Born in Russia in 1977'
    };
    
    const book = {
        'title': 'My first Book',
        'description': 'This is my first book for leanpub app',
        'pages': 96,
        'language': 'english',
        'cover': 'https://images.unsplash.com/photo-1595239541400-63a8eb5b3c24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
        'author': author,
        'min_price': 99,
        'suggested_price': 199,
        'progress': 19,
        'amount': 1999,
        'desired_amount': 9999
    };

    const { getByText } = render(<BookCard book={book}/>);
    expect(getByText('My first Book')).toBeInTheDocument;
    expect(getByText('This is my first book for leanpub app')).toBeInTheDocument;
});

test('renders empty book in a card', () => {
    const { getByText } = render(<BookCard />);
    expect(getByText('Empty book')).toBeInTheDocument;
});


import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AuthorCard from './AuthorCard';

const author = {
    'name': 'Ivanov I.I.',
    'email': 'ivan@ivanov.ru',
    'avatar': 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'about': 'Text about Ivanov. Born in Russia in 1977'
};

test('renders author in a card', () => {
    const { getByText } = render(<AuthorCard author={author}/>);

    expect(getByText('Ivanov I.I.')).toBeInTheDocument;
    expect(getByText('ivan@ivanov.ru')).toBeInTheDocument;
    expect(getByText('Text about Ivanov. Born in Russia in 1977')).toBeInTheDocument;
});

test('renders empty author in a card', () => {
    const { getByText } = render(<AuthorCard />);
    expect(getByText('Empty author')).toBeInTheDocument;
});


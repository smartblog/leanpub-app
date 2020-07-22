import ReactDom from 'react-dom'
import React from 'react'

import App from './App'

const author = {
    'name': 'Ivanov I.I.',
    'email': 'ivan@ivanov.ru',
    'avatar': 'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'about': 'Text about Ivanov. Born in Russia in 1977'
}

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
}

ReactDom.render(
    <App book={book}/>,
    document.getElementById('root')
)

// Название, 
// Короткое описание, 
// количество страниц, 
// язык, 
// процент прогресса, 
// Ссылка на картинку с обложкой, 
// Автор (у каждого автора есть имя, email, ссылка на аватар и краткая информация об авторе), 
// минимальная цена (меньше, чем за неё нельзя будет подписаться на покупку книги), 
// желаемая цена (автор хотел бы выручить за каждый экземпляр примерно столько), 
// собранная сумма, 
// ожидаемая сумма
import React from 'react'
import BookCard from './BookCard'

import logo from './images/logo.png'

class App extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>
          <img style={styles.logo} src={logo}/>
          LeanPub App
        </header>
        <main>
          <BookCard book={this.props.book}/>
        </main>
        <footer>
          &copy; {new Date().getFullYear()}, Thinknetica React
        </footer>
      </>
    )
  }
}

export default App;

const styles = {
  header: {
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  logo: {
    maxWidth: '50px', 
  },
  main: {
    padding: '10px 10%',
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px'
  }
}
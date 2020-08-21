import React from 'react';
import AuthorCard from './AuthorCard';

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false, limit: 3 };
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const isOpen = this.state.isOpen;
    const limit = this.state.limit;

    return (
      <div>
        { isOpen ?
          <div>
            {this.props.authors.map(author => (
              <div key={author.id}>
                <AuthorCard author={author} />
              </div>
            ))}
          </div> 
          :
          <div>
            {this.props.authors.slice(0, limit).map(author => (
              <div key={author.id}>
                <AuthorCard author={author} />
              </div>
            ))}
          </div> 
        }
        
        { this.props.authors.length > limit &&
          <button style={styles.button} onClick={() => this.toggleOpen()}>
            {isOpen ? 'Close list' : 'See all'}
          </button>
        }

      </div>
    )
  }
}

export default AuthorsList;

const styles = {
  button: {
    padding: '10px 5px',
    backgroundColor: '#eee'
  }
}

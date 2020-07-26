import React from 'react';
import AuthorCard from './AuthorCard';

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLimit: true };
  }

  toggleLimit() {
    this.setState({ isLimit: !this.state.isLimit });
  }

  render() {
    const isLimit = this.state.isLimit;
    const limit = 3;

    if (isLimit) {
      return (
        <div>
          {this.props.authors.slice(0, limit).map(author => (
            <div key={author.id}>
              <AuthorCard author={author} />
            </div>
          ))}

          <button style={styles.button} onClick={() => this.toggleLimit()}>
            Show all ({this.props.authors.length})
          </button>
        </div>
      )
    } else {
      return (
        <div>
          {this.props.authors.map(author => (
            <div key={author.id}>
              <AuthorCard author={author} />
            </div>
          ))}
        </div>
      )
    }
  }
}

export default AuthorsList;

const styles = {
  button: {
    padding: '10px 5px',
    backgroundColor: '#eee'
  }
}

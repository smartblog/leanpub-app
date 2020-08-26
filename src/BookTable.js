import React from 'react';

class BookTable extends React.Component {
  render() {

    return (
      <>
        <div>Pages: {pages}</div>
        <div>Language: {language}</div>
        <div>Min Price: ${min_price}</div>
        <div>Suggested Price: ${suggested_price}</div>
        <div>Progress: {amount} / {desired_amount} ({progress}%)</div> 
      </>
    )
  }
}

export default BookTable;
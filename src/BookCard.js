import React from 'react';
import AuthorsList from './AuthorsList';
import SubscribeModal from './SubscribeModal';
import ContactForm from './ContactForm';

class BookCard extends React.Component {
  render() {
    if (!this.props.book)
      return <div>Empty book</div>

    const { 
      book: { title, description, cover, authors, pages, language, min_price, suggested_price, amount, desired_amount, progress, subscribers } 
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={cover} alt={title} />
        </div>
        <div style={styles.cardBody}>
          <div style={styles.title}>{title}</div>
          <div>{description}</div>
          <div>Pages: {pages}</div>
          <div>Language: {language}</div>
          <div>Min Price: ${min_price}</div>
          <div>Suggested Price: ${suggested_price}</div>
          <div>Progress: {amount} / {desired_amount} ({progress}%)</div> 
          <div>
            <span>Subscribers: {subscribers}</span>
            {subscribers > 1000 &&
              <span>
                Популярная!
              </span>
            }
            <SubscribeModal />
          </div>
          <AuthorsList authors={authors}/>
          <ContactForm />
        </div>
      </div>
    )
  }
}
export default BookCard;

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  imageBox: {
    maxWidth: '200px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold'
  }
}
import React from 'react';
import AuthorsList from './AuthorsList';
import SubscribeModal from './SubscribeModal';
import ContactForm from './ContactForm';
import SimilarBooks from './SimilarBooks';

const Row = ({children, label, price}) => (
  <div>
    <span>{label}: </span>
    {price ? <span>${children}</span> : <span>{children}</span>}
  </div>
);

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
          {subscribers > 1000 && <div style={styles.popular}>Популярная!</div>}
          <div>{description}</div>

          <Row label='Pages'>{pages}</Row>
          <Row label='Language'>{language}</Row>
          <Row price label='Min Price'>{min_price}</Row>
          <Row price label='Suggested Price'>{suggested_price}</Row>
          <Row label='Subscribers'>{subscribers}</Row>
          <SubscribeModal />
          <div>Progress: {amount} / {desired_amount} ({progress}%)</div> 

          <AuthorsList authors={authors}/>
          <ContactForm />
          <SimilarBooks />
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
    fontSize: '20px',
    margin: '5px 0 10px 0',
    fontWeight: 'bold'
  },
  popular: {
    padding: '5px 10px',
    background: 'green',
    color: 'white' 
  }
}
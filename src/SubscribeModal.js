import React from 'react';
import ReactDOM from 'react-dom';

class SubscribeModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return(
      <>
        <button style={styles.button} onClick={ () => this.toggle()}>
          Подписаться
        </button>

        { this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                Для того чтобы подписаться на книгу нужно 50$
                <button onClick={ () => this.toggle() }>
                  Закрыть
                </button>
              </div>
            </div>,
            document.getElementById('modal')
          )
        }
      </>
    )
  }
}

export default SubscribeModal;

const styles = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 0.75)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    rigth: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px'
  },
  button: {
    backgroundColor: 'green',
    padding: '5px 10px',
    color: '#fff'
  }
}
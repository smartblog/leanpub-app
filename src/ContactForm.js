import React from 'react';

class ContactForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      question: ''
    }
  }

  setField(name, e) {
    this.setState({
      [name]: e.target.value,
    })
  }

  cleanFields() {
    this.setState({
      name: '',
      email: '',
      question: ''
    })
  }

  sendQuestion(state) {
    const request = {
      name: state.name,
      email: state.email,
      question: state.question
    }

    console.log(request)
    this.cleanFields()
  }

  render() {

    return (
      <div>
        <label>Name</label>
        <input 
          onChange={(e) => this.setField('name', e)}
          placeholder='Enter your Name'
          value={this.state.name}
        />

        <label>Email</label>
        <input 
          onChange={(e) => this.setField('email', e)}
          placeholder='Enter your Email'
          value={this.state.email} 
        />

        <label>Question</label>
        <textarea 
          onChange={(e) => this.setField('question', e)}
          placeholder='Your Question'
          value={this.state.question} 
        />

        <button onClick={(e) => this.sendQuestion(this.state)}>Send Question</button>
      </div>
    )
  }
}

export default ContactForm;
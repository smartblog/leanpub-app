import React from 'react';

const FieldInput = ({label, type, placeholder, value, onChange}) => (
  <div>
    <label>{label}</label>
    <input
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    />
  </div>
);

const FieldTextarea = ({label, placeholder, value, onChange}) => (
  <div>
    <label>{label}</label>
    <textarea
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    />
  </div>
);

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
        <FieldInput label='Name' placeholder='Enter your Name' value={this.state.name} onChange={(e) => this.setField('name', e)}/>
        <FieldInput label='Email' placeholder='Enter your Email' value={this.state.email} onChange={(e) => this.setField('email', e)}/>
        <FieldTextarea label='Question' placeholder='Your Question' value={this.state.question} onChange={(e) => this.setField('question', e)}/>

        <button onClick={(e) => this.sendQuestion(this.state)}>Send Question</button>
      </div>
    )
  }
}

export default ContactForm;
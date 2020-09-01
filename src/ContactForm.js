import React from 'react';

class Field extends React.Component {
  render() {
    const { type, name, label, placeholder, value, onChange }  = this.props

    const Element = type === 'textarea' ? 'textarea' : 'input'
    return(
      <div>
        <label>{label}</label>
        <Element
          name={name}  
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </div>
    )
  }
}

class ContactForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      question: ''
    }

    this.onChange = this.onChange.bind(this);
  }

  setField(name, value) {
    this.setState({
      [name]: value,
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

  onChange(e) {
    this.setField(e.target.name, e.target.value)
  }

  render() {
    return (
      <div>
        <Field name='name' type='input' label='Name' placeholder='Enter your Name' value={this.state.name} onChange={this.onChange}/>
        <Field name='email' type='input' label='Email' placeholder='Enter your Email' value={this.state.email} onChange={this.onChange}/>
        <Field name='question' type='textarea' label='Question' placeholder='Your Question' value={this.state.question} onChange={this.onChange}/>

        <button onClick={(e) => this.sendQuestion(this.state)}>Send Question</button>
      </div>
    )
  }
}

export default ContactForm;
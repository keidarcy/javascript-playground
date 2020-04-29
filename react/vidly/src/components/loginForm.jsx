import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form.jsx'

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: { username: '', password: '' }
  }
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }
  doSubmit = () => {
    // call server
    console.log('sumitted')
  }
  componentDidMount = () => {
    // console.log(this.username.current)
    // this.username.current.focus()
  }
  render() {
    // console.log(this.test('ds'))
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login button')}
        </form>
      </div>
    )
  }
}

export default LoginForm

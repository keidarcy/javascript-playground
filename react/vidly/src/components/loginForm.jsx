import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form.jsx'
import auth from '../services/authService.js'
import { toast } from 'react-toastify'
import { Redirect } from 'react-router-dom'

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: { username: '', password: '' }
  }
  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }
  doSubmit = async () => {
    try {
      const { data } = this.state
      await auth.login(data.username, data.password)

      const { state } = this.props.location

      window.location = state ? state.from.pathname : '/'
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data
        toast('coooool')
        this.setState({ errors })
      }
    }
  }
  componentDidMount = () => {
    // console.log(this.username.current)
    // this.username.current.focus()
  }
  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />
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

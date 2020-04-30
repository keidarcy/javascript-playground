import React from 'react'
import Form from './common/form'
import Joi from 'joi-browser'
import * as userService from '../services/userService'
import { toast } from 'react-toastify'
import auth from '../services/authService'

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: { username: '', password: '', name: '' }
  }
  schema = {
    username: Joi.string().required().email().label('Username'),
    password: Joi.string().required().min(3).label('Password'),
    name: Joi.string().required().label('Name')
  }
  async doSubmit() {
    try {
      const response = await userService.register(this.state.data)
      auth.loginWithJwt(response.headers['x-auth-token'])
      // this.props.history.push('/')
      window.location = '/'
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data
        toast(ex.response.data)
        this.setState({ errors })
      }
    }
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    )
  }
}

export default RegisterForm

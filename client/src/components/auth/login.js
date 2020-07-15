import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    user: null,
    token: '',
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    await axios
      .post('api/auth/loginUser', { email, password })
      .then(response => {
        this.setState({
          token: response.data.token,
        });
        this.getUser();
      })
      .catch(err => {
        console.error(err);
      });
  }

  async getUser() {
    const options = {
      method: 'GET',
      headers: { 'x-auth-token': this.state.token },
      url: '/api/auth',
    };
    await axios(options)
      .then(response => {
        this.setState({
          user: response.data,
          redirect: response.data.type,
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.user) {
      return (
        <Redirect
          to={{
            pathname: `/${this.state.user.type}`,
            state: {
              fName: `${this.state.user.fName}`,
              gitUser: `${this.state.user.gitUser}`,
            },
          }}
        />
      );
    }
    return (
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          {/* Start Form Login Page */}
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Sign In</h3>

            <div className='form-group'>
              <label>E-mail</label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Enter e-mail'
              />
            </div>

            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className='form-control'
                placeholder='Enter password'
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary btn-block'
              id='btn_login'
            >
              Login
            </button>

            <p className='forgot-password text-right'>
              Don't have an account? <a href='../sign-up'>SignUp</a>
            </p>
          </form>
          {/* End Form Login Page */}
        </div>
      </div>
    );
  }
}

export default Login;

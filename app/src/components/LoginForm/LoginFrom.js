import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import "./loginForm.css";
import { Link } from "react-router-dom";
import Menu from '../../components/menu/Menu'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  /* handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { email, password } = ev.target

       
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(email.value, password.value)
        )

        email.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }  */
  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { email, password } = ev.target;

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        /* TokenService.saveAuthToken(res.authToken); */
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <h1></h1>
        <form
          className="form__login"
          //onSubmit={this.handleSubmitBasicAuth}
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role="alert">{error && <p className="red">{error}</p>}</div>
          <div className="email">
            <label className="login-input-label" htmlFor="LoginForm__email">
              Email
            </label>
            <br></br>
            <input
              className="user-input"
              required
              name="email"
              id="LoginForm__email"
            />
          </div>
          <div className="password">
            <label className="login-input-label" htmlFor="LoginForm__password">
              Password
            </label>
            <br></br>
            <input
              className="user-input"
              required
              name="password"
              type="password"
              id="LoginForm__password"
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <div className='link-to-register'>
          <p>Don't have an account yet?</p>
          <span>
            <Link to='/register'>Register</Link>
          </span>
        </div>
      </div>
    );
  }
}

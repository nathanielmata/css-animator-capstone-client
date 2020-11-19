import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { full_name, user_name, email, password } = ev.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      email: email.value,
    })
      .then((user) => {
        full_name.value = "";
        email.value = "";
        user_name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="registration_error">{error}</p>}</div>
        <div className="full_name">
          <label
            className="login-input-label"
            htmlFor="RegistrationForm__full_name"
          >
            Full name <required />
          </label>
          <input
            className="user-input"
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          />
        </div>
        <div className="user_name">
          <label
            className="login-input-label"
            htmlFor="RegistrationForm__user_name"
          >
            User name <required />
          </label>
          <input
            className="user-input"
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          />
        </div>
        <div className="email">
          <label
            className="login-input-label"
            htmlFor="RegistrationForm__email"
          >
            Email
            <input
              className="user-input"
              name="email"
              type="email"
              required
              id="RegistrationForm__email"
            />
          </label>
        </div>
        <div className="password-reg">
          <label
            className="login-input-label"
            htmlFor="RegistrationForm__password"
          >
            Password <required />
          </label>
          <input
            className="user-input"
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          />
        </div>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    );
  }
}

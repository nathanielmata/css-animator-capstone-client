import React, { Component}from "react";
import "./loginPage.css";
import LoginForm from "../../components/LoginForm/LoginFrom";
import Menu from '../../components/menu/Menu'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='LoginPage'>
        <Menu />
        <h2>Welcome Back!</h2>
        <h3>
          Sign in to get back to work.
        </h3>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}


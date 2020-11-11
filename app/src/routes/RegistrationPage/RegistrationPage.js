import React, { Component } from 'react'
import Menu from '../../components/Menu/Menu'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <Menu />
        <h2>Get started for free.</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}

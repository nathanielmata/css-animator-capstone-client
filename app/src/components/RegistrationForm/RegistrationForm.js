import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, user_name, email, password } = ev.target

        /* console.log('registration form submitted')
        console.log({ full_name, nick_name, user_name, password }) */
        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
            email: email.value,
        })
            .then(user => {

                full_name.value = ''
                email.value = ''
                user_name.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })

    }

    render() {
        const { error } = this.state
        return (
            <form
                className='RegistrationForm'
                onSubmit={this.handleSubmit}
            >
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <div className='full_name'>
                    <label htmlFor='RegistrationForm__full_name'>
                        Full name <required />
                    </label>
                    <input
                        name='full_name'
                        type='text'
                        required
                        id='RegistrationForm__full_name'>
                    </input>
                </div>
                <div className='user_name'>
                    <label htmlFor='RegistrationForm__user_name'>
                        User name <required />
                    </label>
                    <input
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm__user_name'>
                    </input>
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm__password'>
                        Password <required />
                    </label>
                    <input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm__password'>
                    </input>
                </div>
                <div className='email'>
                    <label htmlFor='RegistrationForm__email'>
                        Email
          </label>
                    <input
                        name='email'
                        type='email'
                        required
                        id='RegistrationForm__email'>
                    </input>
                </div>
                <button type='submit'>
                    Register
        </button>
            </form>
        )
    }
}
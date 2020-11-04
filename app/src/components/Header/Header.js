import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

export default class Header extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
        </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                    to='/login'>
                    Log in
        </Link>
                <Link
                    to='/register'>
                    Register
        </Link>
            </div>
        )
    }

    render() {
        return <>
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        {' '}
            Animation Station
          </Link>
                </h1>
                <span className='Header__tagline--wide'>Animation Station.</span>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </nav>

            <span className='Header__tagline--narrow'>Lets be creative, make some animation.</span>
        </>
    }
}

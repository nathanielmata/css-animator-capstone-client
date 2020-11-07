import React from 'react'
import './loginComponent.css'
import CustomButton from '../customButton/CustomButton'
import colors from '../../constants/colors'

const LoginComponent = props =>{
    return(
        <div className="header-form-container">
        <h1 className="title">Animation Station</h1>
        <h2 className="welcome">Welcome Back!</h2>
        <h3 style={{padding:20, paddingLeft: 0, paddingTop: 0, marginBottom: 30}} >Log in into yout account.</h3>
        <form id="login-form">
          <label className="login-input-label">Email</label>
          <input className="user-input" />
          <label className="login-input-label">Password</label>
          <input className="user-input" />
          <CustomButton color={colors.purple} styles={{marginTop: 50}}>Login</CustomButton>
        </form>
      </div>
    )
}
export default LoginComponent;
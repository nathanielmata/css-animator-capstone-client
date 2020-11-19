import React from 'react';
import TokenService from '../services/token-service'

const UserContext = React.createContext({
  setSignIn: () => {},
  setSignOut: () => {},
  setUserName: () => {},
  setUserEmail: () => {},
  setUserId: () => {},
  setUser: () => {},
  user: TokenService.getAuthToken(),
  user_name: '',
  user_email: '',
  full_name:'',
  user_id: null,
  error: null,
  setError: () => {},
  clearError: () => { },
  deleteAnimation: () =>{}
});

export default UserContext;

export class UserProvider extends React.Component {
  state = {
    error: null,
    user: TokenService.getAuthToken(),
    user_name: localStorage.user_name,
    animations:[]
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setSignIn = () => {
    this.setState({ signin: true });
  };

  setSignOut = () => {
    this.setState({ signin: false });
  };

  setUserName = user_name => {
    this.setState({ user_name });
  };

  setUserId = user_id => {
    this.setState({ user_id });
  };
  setUserEmail = user_email => {
    this.setState({ user_email });
  };
  setUserFullName = full_name => {
    this.setState({full_name})
  }
  setUser = (user) => {
    this.setState({ user });

  };
  deleteAnimation = (animationId) => {
   this.setState({animationId}) 
  }
  render() {
    const value = {
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      signin: this.state.signin,
      setSignIn: this.setSignIn,
      setSignOut: this.setSignOut,
      setUserName: this.setUserName,
      user_name: this.state.user_name,
      setUserEmail: this.setUserEmail,
      user_email: this.state.user_email,
      setUserId: this.setUserId,
      user_id: this.state.user_id,
      setUserFullName: this.setUserFullName,
      full_name: this.state.full_name,
      setUser: this.setUser,
      user: this.state.user,
      deleteAnimation: this.deleteAnimation,
      
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
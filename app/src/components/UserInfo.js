import Avatar from 'react-avatar';
import CustomButton from './CustomButton/CustomButton';

import React, { Component } from 'react';
import UserContext from '../context/UserContext';

export default class UserInfo extends Component {
	static contextType = UserContext;
	render() {
		return (
			<div>
				<div className='user-info-container'>
					<Avatar
						// src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
						/* name={props.username} */
						name={this.context.user_name}
						size='100'
						round={true}
					/>{' '}
					<div className='username-container'>
						<p className='user-name'>{this.context.full_name}</p>
					</div>
				</div>
			</div>
		);
	}
}

/* const UserInfo = (props) => {

  let userAvatarList = [
    "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
  ];
  return (
    <div className="user-info-container">
      <Avatar
        // src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        name={props.username}
        size="100"
        round={true}
      />{" "}
      <div className="username-container">
        <p className="user-name">{props.username}</p>
      </div>
    </div>
  );
};

export default UserInfo; */

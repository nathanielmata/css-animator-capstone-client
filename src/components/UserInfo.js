import React, { Component } from 'react';
import Avatar from 'react-avatar';
import UserContext from '../context/UserContext';

export default class UserInfo extends Component {
	static contextType = UserContext;
	render() {
		return (
			<div>
				<div className='user-info-container'>
					<Avatar
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



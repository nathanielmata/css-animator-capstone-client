import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/notFound.png';

const NotFound = () => (
	<div className='notfound__container'>
		<div>
			<h1> Page not found</h1>

			<img src={notFound} alt='not found' />
			<p style={{ textAlign: 'center', fontSize: '30px' }}>
				<Link className='notfound__homelink' to='/'>
					Go to Home{' '}
				</Link>
			</p>
		</div>
	</div>
);

export default NotFound;

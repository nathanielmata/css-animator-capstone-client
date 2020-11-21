import React from 'react';
import './HowToUse.css';
import Header from '../Header/Header';

export default function HowToUser() {
	return (
		<div>
			<Header />
			<div className='how-to'>
				<h1>How to get started</h1>
				<p>Trying to post a new animation?</p>
				<ol>
					<li>Sign Up</li>
					<li>Sign In</li>
					<li>Go to the editor page for adding new animation</li>
					<li>Click the New Animation button to create new animation</li>
					<li>Click the CODE button to see generated code for the animation</li>
					<li>Click the Option button to add more option to the animation</li>
					<li>Click the profile to see all saved animations</li>
					<li>Click the Play button to see the animation</li>
					<li>Click the profile to see all saved animations</li>

					<li>
						DONE! Easy as that. Now you can view your animation in your profile.
					</li>
				</ol>
				<p>Trying to edit your posting?</p>
				<ol>
					<li>Go to your profile</li>
					<li>Click on the Edit you want to edit</li>
					<li>
						Click on the "target" of your animation. *note: As of now you can
						edit all field of your animation
					</li>
					<li>Hit SAVE button then your animation will be updated.</li>
				</ol>
				<p>Trying to delete a posting?</p>
				<ol>
					<li>Go to your profile</li>
					<li>Click on the EDIT button you want to delete</li>
					<li>Tap on DELETE button and it will be removed</li>
				</ol>
				<p>Login witha a test user</p>
				<ol>
					<li>Email: test@animationstation.net</li>
					<li>Password: Test2020@</li>
				</ol>
			</div>

			<footer>&#169; AnimationStation 2020</footer>
		</div>
	);
}

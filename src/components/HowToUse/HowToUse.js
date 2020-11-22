import React from 'react';
import './HowToUse.css';

export default function HowToUser() {
	return (
		<div className="how-to__outer">
			<div className='how-to'>
				<h1>How to use Animation Station:</h1>
				
				<ol>
					<li>Click “Get Started”</li>
					<li>Register if you have not already, then Login</li>
					<li>Click “New Animation” to create a new animation,<br />
					
					click “EDIT” next to any existing animation to edit that animation,<br />
					 or click “PLAY” next to any existing animation to preview that animation</li>
					<li>If you choose to create or edit an animation, an editor screen will open.</li>
						<ol id = "left">
						<li>On the left side of the editor, you can:</li>
					
						<ul>
							<li>enter a title for your animation </li>
							<li>enter a title for your animation</li>
							<li>enter values for delay, duration, and iteration </li>
							<li>select a direction, timing function, and fill</li>
							<li>click on Pause, Stop, and Play to preview your animation</li>					
						</ul>
						<li>On the bottom of the editor, you can</li>
						<ul>
							<li>click OPTIONS to select amongst available keyframe transformations </li>
							<li>click SAVE to save your new or updated animation</li>
							<li>click DELETE to delete your animation </li>
							<li>click CODE to access the code which will allow you to use the animation in an external CSS file.</li>					
						</ul>
						</ol>	
					
				</ol>
			</div>

      <footer>&#169; Animation Station {new Date().getFullYear()}</footer>
		</div>
	);
}

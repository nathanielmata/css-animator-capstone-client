import React, { useState } from 'react';
import './App.css';

function App() {
	// Declare a new state variable, which we'll call "animation"
	let [animation, setAnimation] = useState('');

	const handleClick = (e) => {
    e.preventDefault();
    
		const {
			name,
			delay,
			direction,
			timing,
			duration,
			fill,
			iteration,
		} = e.target;

		const str = [
      duration.value + "ms",
      timing.value,
			delay.value + "ms",
      iteration.value,
      direction.value,
			fill.value,
			name.value,
		].join(' ');

		setAnimation(str);
	};

	return (
		<div className='App'>
			<form id='controls' className='controls' onSubmit={(e) => handleClick(e)}>
				<label for='name'>
					<div>Name</div>
					<input type='text' id='name' name='name' />
				</label>

				<label for='delay'>
					<div>Delay</div>
					<input type='range' id='delay' name='delay' min='0' max='6000' value='0' />
				</label>

				<label for='direction'>
					<div>Direction</div>
					<select name='direction' id='direction'>
						<option value='normal'>normal</option>
						<option value='reverse'>reverse</option>
						<option value='alternate'>alternate</option>
						<option value='alternate-reverse'>alternate-reverse</option>
					</select>
				</label>

				<label for='timing'>
					<div>Timing Function</div>
					<select name='timing' id='timing'>
						<option value='ease'>ease</option>
						<option value='linear'>linear</option>
						<option value='ease-in'>ease-in</option>
						<option value='ease-out'>ease-out</option>
            <option value='ease-in-out'>ease-in-out</option>
					</select>
				</label>

				<label for='duration'>
					<div>Duration</div>
					<input type='range' id='duration' name='duration' min='0' max='6000' value='3000' />
				</label>

				<label for='fill'>
					<div>Fill</div>
					<select name='fill' id='fill'>
						<option value='forwards'>forwards</option>
						<option value='backwards'>backwards</option>
						<option value='both' selected='selected'>both</option>
						<option value='none'>none</option>
					</select>
				</label>

				<label for='iteration'>
					<div>Iteration</div>
					<input
						type='number'
						id='iteration'
						name='iteration'
						min='1'
						value='1'
					/>
				</label>
				<button type='submit'>BUTTON</button>

				<div>{animation}</div>
			</form>
		</div>
	);
}

export default App;

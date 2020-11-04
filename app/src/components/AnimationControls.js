import React, { useState } from 'react';
import { Square } from './SvgObjects';

function AnimationControls() {
	const [animation, setAnimation] = useState('');

	const handleStop = (e) => {
		document
			.querySelector('#animation__obj')
			.classList.remove('animation__obj');
	};

	const handleStart = (e) => {
		let css = animation + 'object-spin';
		document.querySelector('#animation__obj').style.animation = '';
		void document.querySelector('#animation__obj').offsetWidth;

		document.querySelector('#animation__obj').style.animation = css;
  };
  
  const clearCSS = () => {
    document.querySelector('#animation__obj').style.animation = '';
    void document.querySelector('#animation__obj').offsetWidth;
  }

  const setCSS = (str) => {
    document.querySelector('#animation__obj').style.animation = str;
  }

	const handleClick = (e) => {
    e.preventDefault();
    clearCSS();

		const {
			name,
			delay,
			direction,
			timing,
			duration,
			fill,
			iteration,
		} = e.target;

		let str = [
			duration.value + 'ms',
			timing.value,
			delay.value + 'ms',
			iteration.value,
			direction.value,
			fill.value,
			name.value,
		].join(' ');

    setAnimation(str);
    setCSS(str + 'object-spin');
	};

	return (
		<>
			<form id='controls' className='controls' onSubmit={(e) => handleClick(e)}>
				<label for='name'>
					<div>Name</div>
					<input type='text' id='name' name='name' />
				</label>

				<label for='delay'>
					<div>Delay</div>
					<input type='range' id='delay' name='delay' min='0' max='6000' />
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
					<input
						type='range'
						id='duration'
						name='duration'
						min='0'
						max='6000'
					/>
				</label>

				<label for='fill'>
					<div>Fill</div>
					<select name='fill' id='fill'>
						<option value='forwards'>forwards</option>
						<option value='backwards'>backwards</option>
						<option value='both' selected='selected'>
							both
						</option>
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
				<button type='submit'>RUN</button>

				<div>{animation}</div>
			</form>
			<div id='preview' class='preview'>
				<div id='animation__obj'>
					<Square classVariant='svg__obj' />
				</div>
			</div>

			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</>
	);
}

export default AnimationControls;

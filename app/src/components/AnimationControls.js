import React, { useState } from 'react';
import svgTargets from './SvgTargets';
import svgIcons from './SvgIcons';
import './AnimationControls.css';

function AnimationControls() {
	const [title, setTitle] = useState('Untitled');
	const [delay, setDelay] = useState('500');
	const [duration, setDuration] = useState('2000');
	const [iteration, setIteration] = useState('1');

	const [direction, setDirection] = useState('normal');
	const [timing, setTiming] = useState('ease');
	const [fill, setFill] = useState('forwards');

	const [animation, setAnimation] = useState({});
	const [animationTarget, setAnimationTarget] = useState({
		target: svgTargets.hotdog.target,
		bg: svgTargets.hotdog.bg,
	});

	const handleTitleChange = (e) => setTitle(e.target.value);
	const handleDelayChange = (e) => setDelay(e.target.value);
	const handleDurationChange = (e) => setDuration(e.target.value);
	const handleIterationChange = (e) => setIteration(e.target.value);

	const handleDirectionChange = (e) => setDirection(e.target.value);
	const handleTimingChange = (e) => setTiming(e.target.value);
	const handleFillChange = (e) => setFill(e.target.value);

	const clearCss = () => {
		document.querySelector('#animation__target').style.animation = '';
		void document.querySelector('#animation__target').offsetWidth;
	};

	const setCss = (str) => {
		document.querySelector('#animation__target').style.animation = str;
	};

	// const handleStop = (e) => {
	// 	document
	// 		.querySelector('#animation__target')
	// 		.classList.remove('animation__target');
	// };

	// const handleStart = (e) => {
	// 	let css = animation + 'target-spin';
	// 	document.querySelector('#animation__target').style.animation = '';
	// 	void document.querySelector('#animation__target').offsetWidth;

	// 	document.querySelector('#animation__target').style.animation = css;
	// };

	const handleSave = (e) => {
		const data = {};

		let formData = new FormData(document.querySelector('#editor__form'));
		for (const [key, value] of formData.entries()) {
			data[key] = value;
		}

		console.log(data);
	};

	const handleClick = (e) => {
		e.preventDefault();
		clearCss();

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

		// setAnimation(str);
		setAnimation({
			name: name.value,
			delay: delay.value,
			direction: direction.value,
			timing: timing.value,
			duration: duration.value,
			fill: fill.value,
			iteration: iteration.value,
		});
		setCss(str + 'target-spin');
	};

	// const handleSubmit = () => {
	// 	console.log(animation);
	// };

	return (
		<div className='editor__container'>
			<div className='editor__controls'>
				<form
					id='editor__form'
					className='editor__form'
					onSubmit={(e) => handleClick(e)}
				>
					<div className='editor__form--title'>
						<label htmlFor='title'>TITLE</label>
						<input
							type='text'
							id='title'
							name='title'
							className='input__text'
							defaultValue={title}
							onChange={(e) => handleTitleChange(e)}
						/>
					</div>

					<div className='editor__form--inner'>
						<div className='editor__form--left'>
							<label htmlFor='delay'>
								<div className='label__title'>Delay</div>
								<input
									type='number'
									id='delay'
									name='delay'
									className='input__num'
									min='0'
									defaultValue={delay}
									onChange={(e) => handleDelayChange(e)}
								/>
							</label>

							<label htmlFor='duration'>
								<div className='label__title'>Duration</div>
								<input
									type='number'
									id='duration'
									name='duration'
									className='input__num'
									min='0'
									defaultValue={duration}
									onChange={(e) => handleDurationChange(e)}
								/>
							</label>
							<label htmlFor='iteration'>
								<div className='label__title'>Iteration</div>
								<input
									type='number'
									id='iteration'
									name='iteration'
									className='input__num'
									min='0'
									defaultValue={iteration}
									onChange={(e) => handleIterationChange(e)}
								/>
							</label>
						</div>

						<div className='editor__form--right'>
							<label htmlFor='direction'>
								<div className='label__title'>Direction</div>
								<div className='select__wrapper'>
									<select
										id='direction'
										name='direction'
										className='editor__form--select'
										defaultValue={direction}
										onChange={(e) => handleDirectionChange(e)}
									>
										<option defaultValue='normal'>normal</option>
										<option value='reverse'>reverse</option>
										<option value='alternate'>alternate</option>
										<option value='alternate-reverse'>alternate-reverse</option>
									</select>
								</div>
							</label>
							<label htmlFor='timing'>
								<div className='label__title'>Timing Function</div>
								<div className='select__wrapper'>
									<select
										id='timing'
										name='timing'
										className='editor__form--select'
										defaultValue={timing}
										onChange={(e) => handleTimingChange(e)}
									>
										<option defaultValue='ease'>ease</option>
										<option value='linear'>linear</option>
										<option value='ease-in'>ease-in</option>
										<option value='ease-out'>ease-out</option>
										<option value='ease-in-out'>ease-in-out</option>
									</select>
								</div>
							</label>

							<label htmlFor='fill'>
								<div className='label__title'>Fill</div>
								<div className='select__wrapper'>
									<select
										id='fill'
										name='fill'
										className='editor__form--select'
										defaultValue={fill}
										onChange={(e) => handleFillChange(e)}
									>
										<option defaultValue='forwards'>forwards</option>
										<option value='backwards'>backwards</option>
										<option value='both'>both</option>
										<option value='none'>none</option>
									</select>
								</div>
							</label>
						</div>
					</div>

					<div className='editor__form--buttons'>
						<button>PAUSE</button>
						<button>STOP</button>
						<button type='submit' className='editor__form--submit'>
							PLAY
						</button>
					</div>
				</form>

				{/* <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleSubmit}>Save</button> */}
			</div>

			<div
				id='editor__preview'
				className='editor__preview'
				style={{ backgroundColor: animationTarget.bg }}
			>
				<div className='editor__preview--controls'>
					<div className='editor__preview--controls-one'>
						<button>DELETE</button>
						<button onClick={(e) => handleSave(e)}>SAVE</button>
					</div>
				</div>
				<div className='editor__preview--controls-two'>
					<div className='icon'>{<svgIcons.css.icon />}</div>
				</div>
				<div id='animation__target' className='animation__target'>
					{/* This is the svg component to be animated passed in from state */}
					{<animationTarget.target />}
				</div>
			</div>
		</div>
	);
}

export default AnimationControls;

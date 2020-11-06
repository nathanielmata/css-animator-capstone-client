import React, { useState } from 'react';
import svgObjs from './SvgObjects';

function AnimationControls() {
  const [title, setTitle] = useState('Untitled');
  const [delay, setDelay] = useState('500');
  const [duration, setDuration] = useState('2000');
  const [iteration, setIteration] = useState('1');

  const [direction, setDirection] = useState('normal');
  const [timing, setTiming] = useState('ease');
  const [fill, setFill] = useState('forwards');

  const [animation, setAnimation] = useState({});
  const [animationObj, setAnimationObj] = useState({
    obj: svgObjs.hotdog.obj,
    bg: svgObjs.hotdog.bg
  });

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDelayChange = (e) => setDelay(e.target.value);
  const handleDurationChange = (e) => setDuration(e.target.value);
  const handleIterationChange = (e) => setIteration(e.target.value);

  const handleDirectionChange = (e) => setDirection(e.target.value);
  const handleTimingChange = (e) => setTiming(e.target.value);
  const handleFillChange = (e) => setFill(e.target.value);

	const clearCss = () => {
		document.querySelector('#animation__obj').style.animation = '';
		void document.querySelector('#animation__obj').offsetWidth;
	};

	const setCss = (str) => {
		document.querySelector('#animation__obj').style.animation = str;
	};

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
  
  const handleSave = (e) => {
    const data = {};

    let formData = new FormData(document.querySelector('#editor__form--controls'));
    for(const [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    console.log(data);
  }

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
		setCss(str + 'object-spin');
	};

	const handleSubmit = () => {
		console.log(animation);
	};

	return (
		<div className='editor__container'>
			<div className='editor__controls'>
				<form
					id='editor__form--controls'
					className='editor__form--controls'
					onSubmit={(e) => handleClick(e)}
				>
					<div className='editor__form--title'>
						<h5 className='editor__title-label'>TITLE</h5>
						<input
							className='editor__title-input'
							title='Untitled'
							value={title}
							onChange={(e) => handleTitleChange(e)}
							type='text'
						/>
					</div>

					<div className='editor__form--controls-inner'>
						<div className='editor__form--left'>
							<label for='delay'>
								<div className='label__title'>Delay</div>
								<input
									type='number'
									id='delay'
									name='delay'
									className='input__num'
                  min='0'
									value={delay}
									onChange={(e) => handleDelayChange(e)}
								/>
							</label>

							<label for='duration'>
								<div className='label__title'>Duration</div>
								<input
									type='number'
									id='duration'
									name='duration'
									className='input__num'
                  min='0'
									value={duration}
                  onChange={(e) => handleDurationChange(e)}
								/>
							</label>

							<label for='iteration'>
								<div className='label__title'>Iteration</div>
								<input
									type='number'
									id='iteration'
									name='iteration'
									className='input__num'
                  min='0'
									value={iteration}
                  onChange={(e) => handleIterationChange(e)}
								/>
							</label>
						</div>

						<div className='editor__form--right'>
							<label for='direction'>
								<div className='label__title'>Direction</div>
								<div className='select__wrapper'>
									<select
										name='direction'
										id='direction'
										className='editor__form--select'
                    value={direction}
                    onChange={(e) => handleDirectionChange(e)}
									>
										<option value='normal'>normal</option>
										<option value='reverse' selected>reverse</option>
										<option value='alternate'>alternate</option>
										<option value='alternate-reverse'>alternate-reverse</option>
									</select>
								</div>
							</label>

							<label for='timing'>
								<div className='label__title'>Timing Function</div>
								<div className='select__wrapper'>
									<select
										name='timing'
										id='timing'
										className='editor__form--select'
                    value={timing}
                    onChange={(e) => handleTimingChange(e)}
									>
										<option value='ease'>ease</option>
										<option value='linear'>linear</option>
										<option value='ease-in'>ease-in</option>
										<option value='ease-out'>ease-out</option>
										<option value='ease-in-out'>ease-in-out</option>
									</select>
								</div>
							</label>

							<label for='fill'>
								<div className='label__title'>Fill</div>
								<div className='select__wrapper'>
									<select
										name='fill'
										id='fill'
										className='editor__form--select'
                    value={fill}
                    onChange={(e) => handleFillChange(e)}
									>
										<option value='forwards'>forwards</option>
										<option value='backwards'>backwards</option>
										<option value='both' selected='selected'>both</option>
										<option value='none'>none</option>
									</select>
								</div>
							</label>
						</div>
					</div>

					<div className='editor__form--buttons'>
						<button>PAUSE</button>
						<button>STOP</button>
						<button type='submit' className='form__submit'>
							PLAY
						</button>
					</div>

					{/* <div>{animation}</div> */}
				</form>

				{/* <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleSubmit}>Save</button> */}
			</div>

			<div
				id='editor__preview'
				className='editor__preview'
				style={{ backgroundColor: animationObj.bg }}
			>
				<div className='editor__preview--controls'>
					<button>DELETE</button>
					<button onClick={(e) => handleSave(e)}>SAVE</button>
				</div>

				<div id='animation__obj' className='animation__obj'>
					{/* This is the svg component to be animated passed in from state */}
					{<animationObj.obj />}
				</div>
			</div>
		</div>
	);
}

export default AnimationControls;

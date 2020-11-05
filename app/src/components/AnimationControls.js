import React, { useState } from 'react';
import { Square } from './SvgObjects';

function AnimationControls() {
	// const [animation, setAnimation] = useState('');
	const [animation, setAnimation] = useState({});

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
          
          <div className="editor__form--controls-inner">
            <div className="editor__form--left">
              <label for='delay'>
                <div className="label__title">Delay</div>
                <input type='number' id='delay' name='delay' className="input__num" value='500' />
              </label>

              <label for='duration'>
                <div className="label__title">Duration</div>
                <input type='number' id='duration' name='duration' className="input__num" value='2000' />
              </label>

              <label for='iteration'>
                <div className="label__title">Iteration</div>
                <input type='number' id='iteration' name='iteration' className="input__num" value='1' />
              </label>
            </div>

            <div className="editor__form--right">

              <label for='direction'>
                <div className="label__title">Direction</div>
                <div className='select__wrapper'>
                  <select name='direction' id='direction' className="editor__form--select">
                    <option value='normal'>normal</option>
                    <option value='reverse'>reverse</option>
                    <option value='alternate'>alternate</option>
                    <option value='alternate-reverse'>alternate-reverse</option>
                  </select>
                </div>
              </label>

              <label for='timing'>
                <div className="label__title">Timing Function</div>
                <div className='select__wrapper'>
                  <select name='timing' id='timing' className="editor__form--select">
                    <option value='ease'>ease</option>
                    <option value='linear'>linear</option>
                    <option value='ease-in'>ease-in</option>
                    <option value='ease-out'>ease-out</option>
                    <option value='ease-in-out'>ease-in-out</option>
                  </select>
                </div>
              </label>

              <label for='fill'>
                <div className="label__title">Fill</div>
                <div className='select__wrapper'>
                  <select name='fill' id='fill' className="editor__form--select">
                    <option value='forwards'>forwards</option>
                    <option value='backwards'>backwards</option>
                    <option value='both' selected='selected'>
                      both
                    </option>
                    <option value='none'>none</option>
                  </select>
                </div>
              </label>

            </div>

          </div>

					<button type='submit' className="form__submit">RUN</button>

					{/* <div>{animation}</div> */}
				</form>

				{/* <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleSubmit}>Save</button> */}
			</div>

			<div id='editor__preview' className='editor__preview'>
				<div id='animation__obj' className='animation__obj'>
					<Square classVariant='svg__obj' />
				</div>
			</div>
		</div>
	);
}

export default AnimationControls;

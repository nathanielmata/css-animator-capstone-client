import React, { useState } from 'react';
import svgTargets from '../SvgTargets';
import svgIcons from '../SvgIcons';
import AnimationApiService from '../../services/animation-api-services';
import './AnimationControls.css';

function AnimationControls() {
	const [animation, setAnimation] = useState({
    title: 'Untitled',
    delay: '100',
    duration: '1000',
    iteration: '1',
    direction: 'normal',
    timing: 'ease',
    fill: 'forwards',
  });

	const [animationTarget, setAnimationTarget] = useState({
		target: svgTargets.hotdog.target,
		bg: svgTargets.hotdog.bg,
  });
  
  const getTarget = () => {
    return document.querySelector('#animation__target');
  }

	const clearTargetCss = () => {
		getTarget().style.animation = '';
		void getTarget().offsetWidth;
	};

	const setTargetCss = (str) => {
		getTarget().style.animation = str;
  };

  const setTargetKeyframes = () => {
    const css = '@keyframes target-spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg); } }',
    style = document.querySelector('#keyframes');
    style.innerHTML = css;
  }
  
  const handleInputChange = (e) => {
    setAnimation({
      ...animation,
      [e.target.name]: e.target.value
    })
  };
  
	const handlePause = (e) => {
    e.preventDefault();
    let playState = getTarget().style.animationPlayState;
    playState = playState === 'running' ? 'paused' : 'running';
    getTarget().style.animationPlayState = playState;
  };

  const handleStop = (e) =>  {
    e.preventDefault();
    setTargetCss("")
  };

	const handlePlay = (e) => {
    // prettier-ignore
    e.preventDefault();

		clearTargetCss();
		const { name, delay, direction, timing, duration, fill, iteration } = animation;
		const inlineCss = [
      duration + 'ms', timing, delay + 'ms', iteration, direction, fill, name,
    ].join(' ');

    setTargetKeyframes();
		setTargetCss(inlineCss + 'target-spin');
  };
  
  const handleSave = () => {
    AnimationApiService.postAnimation(animation);
  };

	return (
		<div className='editor__container'>
			<div className='editor__controls'>
				<form
					id='editor__form'
					className='editor__form'>
					<div className='editor__form--title'>
						<label htmlFor='title'>TITLE</label>
						<input
							type='text'
							id='title'
							name='title'
							className='input__text'
							value={animation.title}
							onChange={(e) => handleInputChange(e)}
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
									value={animation.delay}
									onChange={(e) => handleInputChange(e)}
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
									value={animation.duration}
									onChange={(e) => handleInputChange(e)}
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
									value={animation.iteration}
									onChange={(e) => handleInputChange(e)}
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
										value={animation.direction}
										onChange={(e) => handleInputChange(e)}
									>
										<option value='normal'>normal</option>
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
										value={animation.timing}
										onChange={(e) => handleInputChange(e)}
									>
										<option value='ease'>ease</option>
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
										value={animation.fill}
										onChange={(e) => handleInputChange(e)}
									>
										<option value='forwards'>forwards</option>
										<option value='backwards'>backwards</option>
										<option value='both'>both</option>
										<option value='none'>none</option>
									</select>
								</div>
							</label>
						</div>
					</div>

					<div className='editor__form--buttons'>
						<button onClick={(e) => handlePause(e)}>PAUSE</button>
						<button onClick={(e) => handleStop(e)}>STOP</button>
						<button onClick={(e) => handlePlay(e)}>PLAY</button>
					</div>
				</form>
			</div>

			<div
				id='editor__preview'
				className='editor__preview'
				style={{ backgroundColor: animationTarget.bg }}
			>
				<div className='editor__preview--controls'>
					<div className='editor__preview--controls-one'>
						<button>DELETE</button>
						<button onClick={() => handleSave()}>SAVE</button>
					</div>
				</div>
				<div className='editor__preview--controls-two'>
					<div className='icon'>{<svgIcons.css.icon />}</div>
				</div>
				<div id='animation__target' className='animation__target'>
					{<animationTarget.target />}
				</div>
			</div>

      {/* we apply the animation keyframes here */}
      <style id="keyframes"></style>
		</div>
	);
}

export default AnimationControls;

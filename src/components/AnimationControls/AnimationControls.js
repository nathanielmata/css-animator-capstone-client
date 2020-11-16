import React, { useState, useEffect } from 'react';
import svgTargets from '../SvgTargets';
import svgIcons from '../SvgIcons';
import AnimationApiService from '../../services/animation-api-service';
import AnimationKeyframes from './AnimationControls.keyframes';
import './AnimationControls.css';

function AnimationControls(props) {
	const [animation, setAnimation] = useState({
		title: 'Untitled',
		delay: '100',
		duration: '1000',
		iteration: '1',
		direction: 'normal',
		timing: 'ease',
		fill: 'forwards',
		keyframe: { 'rotate-center': AnimationKeyframes['rotate-center'] },
		target: 'hotdog',
	});

	const [animationTarget, setAnimationTarget] = useState(
		svgTargets[animation.target]
  );

  useEffect(() => {
    const id = props.match.params.id ?? null;
    if (props.match.params.id) {
      getAnimation(id);
    }
  }, []);

  const getAnimation = (id) => {
    AnimationApiService.getAnimationById(id)
    .then(data => {
      const { title, delay, duration, direction, iteration, timing, fill, keyframe, target } = data;
      const res = {title, delay, duration, iteration, direction, timing, fill, keyframe, target};
      console.log(res);

      // we need to parse the content from
      // stringified json to json so we can use it
      setAnimation(res);
      setAnimationTarget(svgTargets[res.target]);
    })
    .catch((err) => console.log(err));
  }

  const postAnimation = (animation) => {
    AnimationApiService.postAnimation(animation)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  // const updateAnimation = () => {}

	const getTarget = () => {
		return document.querySelector('#animation__target');
	};

	const clearTargetCss = () => {
		getTarget().style.animation = '';
		void getTarget().offsetWidth;
	};

	const setTargetCss = () => {
		const an = animation;
		const css = [
			Object.keys(an.keyframe)[0],
			an.duration + 'ms',
			an.timing,
			an.delay + 'ms',
			an.iteration,
			an.direction,
			an.fill,
		].join(' ');

		getTarget().style.animation = css;
	};

	const setTargetKeyframesCss = (keyframeCss) => {
		setAnimation({
			...animation,
			keyframe: keyframeCss,
		});
	};

	const handleTargetChange = (e) => {
		const target = e.target.value;
		setAnimation({ ...animation, target: target });
		setAnimationTarget(svgTargets[target]);
	};

	const handleInputChange = (e) => {
		setAnimation({
			...animation,
			[e.target.name]: e.target.value,
		});
	};

	const handlePause = () => {
		let playState = getTarget().style.animationPlayState;
		playState = playState === 'running' ? 'paused' : 'running';
		getTarget().style.animationPlayState = playState;
	};

	const handleStop = () => {
		clearTargetCss();
	};

	const handlePlay = () => {
		clearTargetCss();
		setTargetCss();
  };
  
  const handleDelete = (e) => {
    // Delete code should go here
    // remove console log below
    console.log(e.target.value);
  };
  
	const handleSave = (e) => {
    postAnimation(animation);
	};

	return (
		<div className='editor__container'>
			<div className='editor__controls'>
				<form id='editor__form' className='editor__form'>
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
            <div className='editor__form--target'>
              <label htmlFor='target'>
                <div className='label__title'>Target</div>
                <div className='select__wrapper'>
                  <select
                    id='target'
                    name='target'
                    className='editor__form--select'
                    value={animation.target}
                    onChange={(e) => handleTargetChange(e)}
                  >
                    {Object.keys(svgTargets).map((target, idx) => {
                      return (
                        <option key={idx} value={target}>
                          {target}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </label>
            </div>
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
						<button type="button" onClick={(e) => handlePause()}>PAUSE</button>
						<button type="button" onClick={(e) => handleStop()}>STOP</button>
						<button type="button" onClick={(e) => handlePlay()}>PLAY</button>
					</div>
				</form>
			</div>

			<div
				id='editor__preview'
				className='editor__preview'
				style={{ backgroundColor: animationTarget.bg }}>
				<div className='editor__preview--controls'>
          <div className='editor__preview--controls-two'>
            <button>FRAMES</button>
            <button>CODE</button>
          </div>
					<div className='editor__preview--controls-one'>
						<button onClick={(e) => handleDelete(e)}>DELETE</button>
						<button onClick={(e) => handleSave(e)}>SAVE</button>
					</div>
				</div>
				<div id='animation__target' className='animation__target'>
					{<animationTarget.target />}
				</div>
			</div>

			
			<div className='editor__keyframe--list'>
        <ul>
          {Object.entries(AnimationKeyframes).map(([key, value], idx) => {
            return (
              <li
                key={idx}
                className={key === Object.keys(animation.keyframe)[0] ? "active": ""}
                onClick={() => setTargetKeyframesCss({ [key]: value })}>
                {key}
              </li>
            );
          })}
        </ul>
			</div>

      {/* we apply the animation keyframes here */}
			<style id='keyframes__style'>
				{Object.values(animation.keyframe)[0]}
			</style>
		</div>
	);
}

export default AnimationControls;

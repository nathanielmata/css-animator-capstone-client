import React, { useState, useEffect } from 'react';
import svgTargets from '../SvgTargets';
import svgIcons from '../SvgIcons';
import AnimationApiService from '../../services/animation-api-service';
import AnimationKeyframes from './AnimationControls.keyframes';
import './AnimationControls.css';

function AnimationControls(props) {

  const [message, setMessage] = useState('');
  const [showSlideOut, setShowSlideOut] = useState('reverse');
  const [showDrawer, setShowDrawer] = useState('');
  const [cssOutput, setCssOutput] = useState('');
	
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
    (() => {
      const css = generateTargetCss();
      const cssClass = generateCssClass(css);
      setCssOutput(cssClass);
    })()

    const id = props.match.params.id ?? null;
    if (props.match.params.id) {
      getAnimation(id);
    }
  }, []);

  const getAnimation = (id) => {
    AnimationApiService.getAnimationById(id)
    .then(res => {
      // we need to parse the keyframe data from
      // stringified json to json so we can use it
      const keyframe = JSON.parse(res.keyframe);

      const { title, delay, duration, direction, iteration, timing, fill, target } = res;
      const data = { title, delay, duration, iteration, direction, timing, fill, target, keyframe };
      setAnimation(data);
      setAnimationTarget(svgTargets[data.target]);
    })
    .catch((err) => console.log(err));
  }

  const postAnimation = (animation) => {

    AnimationApiService.postAnimation(animation)
      .then(res => {
				setTimeout(function () {
				setMessage('')	
				},1000)
				setMessage
					('Animation saved successfully')
				props.history.push(`/profile`)

			})
			.catch((err) => console.log(err));
	};

  // const updateAnimation = () => {}

	const getTarget = () => {
		return document.querySelector('#animation__target');
	};

	const clearTargetCss = () => {
		getTarget().style.animation = '';
		void getTarget().offsetWidth;
  };
  
  const generateTargetCss = () => {
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

    return css;
  }

  const generateCssClass = (css) => {
    return `.${Object.keys(animation.keyframe)[0]} { animation: ${css} }`;
  }

	const setTargetCss = () => {
    const css = generateTargetCss();
    const cssClass = generateCssClass(css);
    setCssOutput(cssClass);
		getTarget().style.animation = css;
  };
  
  const showHideSlideOut = async (e) => {
    const target = document.querySelector(".editor__slideout");

    target.style.animation = '';
    void getTarget().offsetWidth;
    
    const options = showSlideOut === "normal" ? "reverse" : "normal";
    const css = `slide-options 300ms ease-out 100ms 1 ${options} both`;
    target.style.animation = css;

    const name = e.target.name
    if (name === showDrawer) {
      setShowSlideOut(options);
      setShowDrawer("");
    }

    if (name !== showDrawer) {
      setShowSlideOut(options);
      setShowSlideOut(options);
      setShowDrawer(e.target.name);
    }

    if (showDrawer !== "") {
      setShowSlideOut(options);
      setShowDrawer(e.target.name);
    }
  }

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
  
	const handleDelete = (e, animationId) => {	
		e.preventDefault();

		AnimationApiService.deleteAnimation(animationId)
			.then(res => {
				setTimeout(function () {
				setMessage('')	
				},1000)
				setMessage
					('Animation delete successfully')	
				/* console.log(res) */
				
				props.history.push((`/profile`)) 
			})
			 
      .catch(err => console.log(err));
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
						<button type='button' onClick={(e) => handlePause()}>
							PAUSE
						</button>
						<button type='button' onClick={(e) => handleStop()}>
							STOP
						</button>
						<button type='button' onClick={(e) => handlePlay()}>
							PLAY
						</button>
					</div>
				</form>
			</div>

			<div
				id='editor__preview'
				className='editor__preview'
				style={{ backgroundColor: animationTarget.bg }}
			>
				<div className='editor__preview--controls'>
					<div className='editor__preview--controls-two'>
						<button onClick={(e) => showHideSlideOut(e)} name="options">OPTIONS</button>
						<button onClick={(e) => showHideSlideOut(e)} name="code">CODE</button>
					</div>
					<div className='editor__preview--controls-one'>
						<button onClick={(e) => handleDelete( e, props.match.params.id)}>DELETE</button>
						<button onClick={(e) => handleSave(e)}>SAVE</button>
						{message}
					</div>
				</div>
				<div id='animation__target' className='animation__target'>
					{<animationTarget.target />}
				</div>
			</div>

			<div className='editor__slideout'>
				<div className={`editor__keyframe--list ${(showDrawer === "options") ? 'show' :  'hide'}`}>
          <div className="editor__slideout--close-outer">
            <div className="editor__slideout--close-inner">
              <svgIcons.close.icon />
            </div>
          </div>
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

				<div className={`editor__css ${showDrawer === "code" ? 'show' :  'hide'}`}>
          <div className="editor__slideout--close-outer">
            <div className="editor__slideout--close-inner">
              <svgIcons.close.icon />
            </div>
          </div>

          <label htmlFor="editor__css--class">CLASS</label>
          <div 
            id='editor__css--class' 
            className='editor__css--inner' 
            dangerouslySetInnerHTML={{ __html: cssOutput }}
            contentEditable>
          </div>

          <label htmlFor="editor__css--keyframes">KEYFRAMES</label>
          <div 
            id='editor__css--keyframes' 
            className='editor__css--inner' 
            dangerouslySetInnerHTML={{ __html: Object.values(animation.keyframe)[0] }}
            contentEditable>
          </div>
        </div>
      </div>

			{/* we apply the animation keyframes here */}
			<style id='keyframes__style'>
				{Object.values(animation.keyframe)[0]}
			</style>
		</div>
	);
}

export default AnimationControls;
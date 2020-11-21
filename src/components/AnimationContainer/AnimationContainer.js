import svgTargets from '../SvgTargets';
import { AnimationKeyframes } from '../AnimationControls/AnimationControls.keyframes';
import './AnimationContainer.css';

function AnimationContainer(props) {
	
	const {
		id,
		delay,
		duration,
		iteration,
		direction,
		timing,
    fill,
    keyframe,
		target,
  } = props.animation;

	const animationTarget = (function () {
    return {
      target: svgTargets[target] === undefined ? svgTargets.square.target : svgTargets[target].target ,
      bg: svgTargets[target] === undefined ? svgTargets.square.bg : svgTargets[target].bg ,
    }
  })();

	const getTarget = () => {
		return document.querySelector(`#dashboard__animation--target${id}`);
	};

	const clearCss = () => {
		getTarget().style.animation = '';
		void getTarget().offsetWidth;
	};

	const setCss = () => {
		const css = [
      Object.keys(JSON.parse(keyframe))[0],
			duration + 'ms',
			timing,
			delay + 'ms',
			iteration,
			direction,
			fill,
		].join(' ');

		getTarget().style.animation = css;
	};

	const playAnimation = (e) => {
		e.preventDefault();
		clearCss();
		setCss();
	};

	return (
		<div className='dashboard__container'>
			<div className='dashboard__controls'>
				<p>{props.animation.title}</p>

				<div className='dashboard__form--buttons'>
					<button>EDIT</button>
					<button
						onClick={(e) => playAnimation(e)}
						className='dashboard__form--submit'
					>
						PLAY
					</button>
				</div>
			</div>

			<div
				id='dashboard__preview'
				className='dashboard__preview'
				style={{ backgroundColor: animationTarget.bg }}
			>
				<div
					id={`dashboard__animation--target${id}`}
					className='dashboard__animation--target'
				>
					{<animationTarget.target />}
				</div>
			</div>

			{/* we apply the animation keyframes here */}
			<style id='keyframes__style'>
        { typeof keyframe === 'string'
          ? Object.values(JSON.parse(keyframe))[0]
          : Object.values(keyframe)[0]}
      </style>
		</div>
	);
}

AnimationContainer.defaultProps = {
	animation: {
    title: 'Untitled',
    delay: '100',
    duration: '1000',
    iteration: '1',
    direction: 'normal',
    timing: 'ease',
    fill: 'forwards',
    keyframe: { 'rotate-center': AnimationKeyframes['rotate-center'] },
    target: 'hotdog',
  }
}


export default AnimationContainer;

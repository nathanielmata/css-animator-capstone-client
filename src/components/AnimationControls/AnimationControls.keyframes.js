const AnimationKeyframes = {  
  "slide-fwd-center": `
  @keyframes slide-fwd-center {
    0% {
      transform: translateZ(0);
    }
    100% {
      transform: translateZ(160px);
    }
  }`,

  "rotate-center": `
  @keyframes rotate-center {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`,

  "scale-up-center": `
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }`,

  "slide-top": `
  @keyframes slide-top {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100px);
    }
  }`,

  "rotate-scale-up": `
  @keyframes rotate-scale-up {
    0% {
      transform: scale(1) rotateZ(0);
    }
    50% {
      transform: scale(2) rotateZ(180deg);
    }
    100% {
      transform: scale(1) rotateZ(360deg);
    }
  }`,

  "flip-scale-2-hor-top": `
  @keyframes flip-scale-2-hor-top {
    0% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 0%;
    }
    50% {
      transform: translateY(-50%) rotateX(-90deg) scale(2);
      transform-origin: 50% 50%;
    }
    100% {
      transform: translateY(-100%) rotateX(-180deg) scale(1);
      transform-origin: 50% 100%;
    }
  }`,

  "rotate-diagonal": `
  @keyframes rotate-diagonal {
    0% {
      -webkit-transform: rotate3d(-1, 1, 0, 0deg);
              transform: rotate3d(-1, 1, 0, 0deg);
    }
    50% {
      -webkit-transform: rotate3d(-1, 1, 0, 180deg);
              transform: rotate3d(-1, 1, 0, 180deg);
    }
    100% {
      -webkit-transform: rotate3d(-1, 1, 0, 360deg);
              transform: rotate3d(-1, 1, 0, 360deg);
    }
  }`,

  "scale-out-center": `
  @keyframes scale-out-center {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 1;
    }
  }`,

  "slide-in-bck-center": `
  @keyframes slide-in-bck-center {
    0% {
      -webkit-transform: translateZ(600px);
              transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  }`
}

export default AnimationKeyframes;
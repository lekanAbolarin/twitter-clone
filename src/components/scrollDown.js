import React, { useLayoutEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useStyles = makeStyles(theme => ({
  scrollDown: {
    width: '100%',
  },
  scrollText: {
    color: '#999999',
    position: 'absolute',
    bottom: '5vw',
    left: '50%',
    transform: ' translate(-50%, 0) scale(0.8) rotate(-90deg) ',
    [theme.breakpoints.up('sm')]: {
      bottom: '3vw',
    },
  },
}));

const ScrollDown = props => {
  const classes = useStyles();
  const root = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.fromTo(
      root.current,
      0.8,
      { y: 18, delay: 2 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    gsap.to(root.current, {
      duration: 0.8,
      opacity: 0,
    });
  }, []);
  return (
    <div className={classes.scrollDown} ref={root}>
      <svg viewBox="0 0 1439.05 811.2">
        <title>Scoll Down</title>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_2-2" data-name="Layer 2">
            <path d="M20.56,119.55l17.39,18,47.34,48.91,70,72.33,85,87.8,93.53,96.62,94.43,97.55,88,91,74.4,76.86,53.49,55.26c8.41,8.69,16.75,17.48,25.25,26.09.38.38.75.77,1.12,1.15,26,26.83,73,26.9,99,0l17.4-18L834,724.35,903.94,652l85.35-88.3,93-96.27,94.37-97.63,88-91,74-76.58,53.49-55.35c8.42-8.71,16.92-17.36,25.27-26.14l1.11-1.15c12.61-13,20.5-31.23,20.5-49.5,0-17.17-7.62-37.67-20.5-49.49C1405.21,8.31,1387.7-.78,1369.05.05c-18.38.83-36.41,7-49.49,20.51l-17.4,18-47.07,48.69-69.92,72.35-85.35,88.31-93,96.26-94.36,97.64-88,91-74,76.58-53.5,55.35c-8.42,8.71-16.95,17.33-25.26,26.13l-1.11,1.16h99l-17.4-18-47.34-48.9-70-72.33-85-87.8-93.53-96.62-94.42-97.55-88.05-91-74.4-76.87L145.92,47.8c-8.42-8.7-16.75-17.49-25.26-26.1l-1.11-1.14C107.19,7.79,87.7.05,70.05.05,52.88.05,32.38,7.68,20.56,20.56,8.31,33.9-.78,51.41.05,70.05s7.26,35.81,20.51,49.5Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ScrollDown;

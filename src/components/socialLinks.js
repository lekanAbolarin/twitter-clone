import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useStyles = makeStyles(theme => ({
  social: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    left: '0px',
    top: '50%',
    opacity: '0',
    transformOrigin: 'left top',
    transform: 'rotate(-90deg) translate3d(-50%, 0, 0) ',
    zIndex: '100000',
    [theme.breakpoints.down('xs')]: {},
  },
  l: {
    margin: '0 8px',
    fontSize: '10px',
  },
}));

const SocialLinks = props => {
  const classes = useStyles();
  const rootNode = useRef(null);
  useEffect(() => {
    gsap.to(rootNode.current, {
      opacity: 1,
      duration: 0.3,
      scrollTrigger: {
        trigger: '#projects',
      },
    });
  });
  return (
    <div ref={rootNode} className={classes.social}>
      <div className={classes.l}>GITHUB</div>
      <div className={classes.l}>
        <a href={require('../assets/images/resume.pdf')} download>
          RESUME
        </a>
      </div>
      <div className={classes.l}>
        <a href="https://www.linkedin.com/in/mike-abolarin" target="_blank">
          LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;

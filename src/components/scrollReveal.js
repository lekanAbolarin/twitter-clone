import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//styles hook
const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
  },
  container: {},
}));

const ScrollReveal = props => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const container = useRef(null);

  //code to run on component mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function bottomReveal() {
      gsap.from(container.current, {
        y: '100%',
        opacity: 0,
        duration: '2',
        ease: 'power4',
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play none none none',
          start: 'top bottom',
          end: 'bottom top',
          // invalidateOnRefresh: true,
        },
      });
    }
    function leftReveal() {
      gsap.from(container.current, {
        x: '-100%',
        opacity: 0,
        duration: '2',
        ease: 'power4',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
        },
      });
    }
    function rightReveal() {
      gsap.from(container.current, {
        x: '100%',
        opacity: 0,
        duration: '2',
        ease: 'power4',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
        },
      });
    }

    switch (props.direction) {
      case 'up':
        bottomReveal();
        break;
      case 'right':
        leftReveal();
        break;
      case 'left':
        rightReveal();
        break;
      default:
        break;
    }
  }, [props]);

  return !isMobile ? (
    <div className={classes.root}>
      <div ref={container} className={classes.container}>
        {props.children}
      </div>
    </div>
  ) : (
    <div className={classes.root}>{props.children}</div>
  );
};

export default ScrollReveal;

import React, { useState, useLayoutEffect, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { gsap, TweenMax } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const useStyles = makeStyles(theme => ({
  viewPort: {
    // width: '100vw',
    height: '100%',
    // paddingRight: '20vw',
    position: 'absolute',
    top: '0',
    left: '0',
    // bottom: '0',
    right: '0',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      // padding: '40px',
    },
  },
  content: {
    // width: '100%',
    margin: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    transformOrigin: 'center top',
    [theme.breakpoints.up('sm')]: {
      left: '40px',
      right: '40px',
    },
  },
}));

const Scroller = props => {
  const classes = useStyles();
  //   const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const content = useRef(null);
  const paused = useRef(null);
  const requestId = useRef(null);
  const [state, setState] = useState({
    target: content.current,
    ease: 0.01,
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
  });

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    //----------gsap way------------
    // body.style.height = `${content.current.clientHeight}px`;

    // gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.create({
    //   onUpdate: self => {
    //     body.style.height = `${content.current.clientHeight}px`;
    //     const scrollY = window.pageYOffset;
    //     let newY = state.y + 5 * (scrollY - state.y);
    //     if (Math.abs(scrollY - newY) > 0.05) {
    //       newY = scrollY;
    //     }
    //     // TweenMax.to(content.current, {
    //     //   y: -newY,
    //     //   duration: 2,
    //     //   ease: 'power3',
    //     // });

    //     const t1 = gsap.timeline();
    //     t1.to(content.current, {
    //       y: -newY,
    //       duration: 2,
    //       // ease: 'power3',
    //       force3d: true,
    //     });
    //     setState(prevState => ({ ...prevState, y: newY }));
    //   },
    // });

    //----------------manual aproach----------------

    TweenMax.to(content.current, {
      rotation: 0.01,
      force3d: true,
      ease: 'power3',
    });

    //window event listeners
    //window.addEventListener('onload', onLoad);
    update();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);

    //event handlers
    function update() {
      const resized = state.resizeRequest > 0;
      const height = content.current.clientHeight;
      body.style.height = `${height}px`;
      let newResizeRequest = 0;
      if (resized) {
        //window resized
        // setState(prevState => ({ ...prevState, resizeRequest: 0 }));
      }
      const scrollY = window.pageYOffset || 0;
      let newEndY = scrollY;
      let newY = state.y + (scrollY - state.y) * state.ease;
      let newScrollRequest;
      if (Math.abs(scrollY - newY) > 0.05 || resized) {
        newY = scrollY;
        newScrollRequest = 0;
      }
      TweenMax.to(content.current, 1.8, {
        y: -newY,
        ease: 'power3',
      });
      requestId.current =
        state.scrollRequest > 0 ? requestAnimationFrame(update) : null;
      setState(prevState => ({
        ...prevState,
        endY: newEndY,
        y: newY,
        resizeRequest: resized ? newResizeRequest : prevState.resizeRequest,
        scrollRequest: newScrollRequest
          ? newScrollRequest
          : prevState.scrollRequest,
      }));
    }
    function onResize() {
      const newResizeRequest = state.resizeRequest + 1;
      if (!requestId.current) {
        requestId.current = requestAnimationFrame(update);
      }
      setState(prevState => ({
        ...prevState,
        resizeRequest: newResizeRequest,
      }));
    }
    function onScroll() {
      const newScrollRequest = state.scrollRequest + 1;
      if (!requestId.current) {
        requestId.current = requestAnimationFrame(update);
      }
      setState(prevState => ({
        ...prevState,
        scrollRequest: newScrollRequest,
      }));
    }
  }, []);

  //jsx structure
  return (
    <div className={classes.viewPort}>
      <div ref={props.pause ? paused : content} className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

export default Scroller;

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

//styles hook
const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    // marginTop: '-30%',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
}));

const Parallax = props => {
  const classes = useStyles();
  const container = useRef(null);

  //code to run on component mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    function verticalParallax(y) {
      if (!y) return;
      gsap.fromTo(
        container.current,
        {
          y: y[0],
        },
        {
          y: `-${y[1]}`,
          duration: '1',
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: container.current,
            scrub: 1,
            toggleActions: 'play none none none',
            start: 'top bottom',
            // invalidateOnRefresh: true,
          },
        }
      );
    }
    function horizontalParallax() {
      //horizontal scroll
    }
    verticalParallax(props.y);
    horizontalParallax(props.x);
  }, [props]);

  return (
    <div className={classes.root}>
      <div ref={container} className={classes.container}>
        {props.children}
      </div>
    </div>
  );
};

export default Parallax;

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//styles hook
const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ffffff',
    position: 'fixed',
    zIndex: '50000',
  },
  principlesWheel: {
    '&>img': {
      width: '30vw',
    },
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
  },
  logo: {
    width: '24px',
    [theme.breakpoints.up('sm')]: {
      width: '100px',
    },
  },
}));

const Loader = props => {
  const classes = useStyles();
  const root = useRef(null);
  const principlesWheel = useRef(null);

  //code to run on component mount
  useLayoutEffect(() => {
    gsap.to(principlesWheel.current, {
      transform: 'scale(1.5)',
      duration: 0.8,
      ease: 'power4',
      yoyo: true,
      repeat: -1,
    });
    return () => {
      gsap.to(root.current, {
        transform: 'translate(-100%)',
        duration: 2,
        ease: 'power4',
      });
    };
  }, []);

  return (
    <div ref={root} className={classes.root}>
      <div ref={principlesWheel} className={classes.principlesWheel}>
        <img
          src={require('../assets/images/principles-wheel.svg')}
          alt="loading..."
        />
      </div>
      <div className={classes.container}>
        <div>
          <img
            src={require('../assets/images/ma-logo.svg')}
            alt=""
            className={classes.logo}
          />
        </div>
        <Typography variant="caption">Loading...</Typography>
      </div>
    </div>
  );
};

export default Loader;

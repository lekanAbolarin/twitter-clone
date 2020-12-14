import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Blinker from './blinker';

const useStyles = makeStyles(theme => ({
  root: {
    // marginLeft: theme.spacing(2),
    // marginTop: theme.spacing(10),
    // marginBottom: theme.spacing(3),
    position: 'relative',
    // top: theme.spacing(5),
    // left: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {},
  },
  line1: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h2.fontSize,
    },
    [theme.breakpoints.up('sm')]: {
      // fontSize: '10rem',
    },
  },
  line2: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h2.fontSize,
    },
    [theme.breakpoints.up('sm')]: {
      // fontSize: '10rem',
    },
  },
  marker: {
    width: '5%',
    minWidth: '18px',
    height: '8px',
    position: 'absolute',
    left: '0',
    bottom: '-20%',
    backgroundColor: theme.palette.primary.main,
  },
  hand: {
    height: '70px',
    // transform: 'scaleY(0.6) scaleX(0.6)',
    zIndex: '-1',
    [theme.breakpoints.up('sm')]: {
      height: '100px',
    },
  },
  svg: {
    width: '60px',
    [theme.breakpoints.up('sm')]: {
      width: '100px',
    },
  },
}));

const SectionHeader = props => {
  const { line1, line2 } = props;
  const line = `${line1}${line2}`;
  const color = '#000000';
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const hand = (
    <svg viewBox="0 0 1036.19 1067.73" className={classes.hand} fill={color}>
      <title>hand</title>
      <path
        class="cls-1"
        d="M29.64,11.19,11.19,29.64a38.2,38.2,0,0,0,0,54l581,581a38.19,38.19,0,0,1,0,54L574.4,736.4a38.19,38.19,0,0,1-54,0L126.09,342.11a38.21,38.21,0,0,0-54,0L53.61,360.57a38.21,38.21,0,0,0,0,54l431.3,431.3a38.19,38.19,0,0,1,0,54l-17.75,17.75a38.21,38.21,0,0,1-54,0l-312.5-312.5a38.2,38.2,0,0,0-54,0L28.16,623.61a38.2,38.2,0,0,0,0,54l364,364a89.06,89.06,0,0,0,113.61,10.3L968.23,732.47a157.42,157.42,0,0,0,65.38-157.85l-62.86-343.7a38.19,38.19,0,0,0-42.49-31l-34.19,4.44A38.19,38.19,0,0,0,861.24,248l27.94,182.68a38.2,38.2,0,0,1-64.75,32.81L414.24,53.93a38.19,38.19,0,0,0-54,0L342.11,72.07a38.21,38.21,0,0,0,0,54L660.74,444.72a38.21,38.21,0,0,1,0,54L643,516.49a38.19,38.19,0,0,1-54,0L83.67,11.19A38.2,38.2,0,0,0,29.64,11.19Z"
      />
    </svg>
  );

  const zigzag = (
    <svg
      viewBox="0 0 73.94 14.19"
      stroke={color}
      strokeWidth={!isMobile ? '4px' : '2px'}
      fill={'none'}
      className={classes.svg}
    >
      <polyline
        points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83"
        style={{ strokeDashoffset: '2e-5', strokeDasharray: 'none' }}
      ></polyline>
    </svg>
  );

  return (
    <div className={classes.root}>
      {zigzag}
      {/* <div className={classes.marker} /> */}
      <Typography
        variant="h1"
        className={classes.line1}
        style={{ color: color }}
      >
        {line}
      </Typography>
      <Typography
        variant="h1"
        className={classes.line2}
        style={{ color: color }}
        gutterBottom
      >
        {/* {line2} */}
      </Typography>
      {/* <div className={classes.marker} /> */}
    </div>
  );
};

export default SectionHeader;

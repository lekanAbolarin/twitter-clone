import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  blinker: {
    // margin: '0 13px -1px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {},
}));

const Blinker = props => {
  const classes = useStyles();
  const dim = {
    width: props.large ? '90px' : '30px',
    height: props.large ? '90px' : '30px',
  };
  return (
    <div className={classes.blinker}>
      <svg
        viewBox="0 0 200 200"
        className={classes.svg}
        width={'30px'}
        height={'30px'}
        fill={props.color ? props.color : '#000000'}
      >
        <circle cx="100" cy="100" r={props.large ? '32' : '8'} />
      </svg>
    </div>
  );
};

export default Blinker;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

import Blinker from './blinker';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '300px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {},
    alignSelf: 'flex-start',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  mask: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  titleBlock: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  captionText: {
    color: '#FFFFFF',
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
}));

const Project = props => {
  let {
    id,
    title,
    description,
    image,
    style,
    maskColor,
    imageWidth,
    onClick,
    isMobile,
  } = props;
  imageWidth = undefined;
  const classes = useStyles();
  const [maskOpacity, setMaskOpacity] = useState('0.5');
  const thumbnailStyle = isMobile
    ? {
        width: 'auto',
        //
        height: '100%',
      }
    : {
        width: '100%',
        height: 'auto',
      };
  return (
    <Paper className={classes.root}>
      <img
        src={image}
        className={classes.image}
        alt={`image representing ${description}`}
      />
      <ButtonBase
        className={classes.mask}
        style={{
          backgroundColor: maskColor,
          opacity: maskOpacity,
          transition: 'all 500ms cubic-bezier(1 0 0 1) 0ms',
        }}
        onClick={onClick}
        onMouseEnter={() => setMaskOpacity('0.3')}
        onMouseLeave={() => setMaskOpacity('0.5')}
      />
      <div className={classes.titleBlock}>
        <Typography variant="caption" className={classes.captionText}>
          {id}
        </Typography>
        <Typography variant="h6" className={classes.titleText}>
          {title}
        </Typography>
        <Typography variant="caption" className={classes.captionText}>
          {description}
        </Typography>
        {/* <ArrowNext /> */}
      </div>
    </Paper>
  );
};

export default Project;

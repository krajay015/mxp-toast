//@flow
import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import toastAction from '../action';

type Props = {
  text: string,
  type: string,
  toastAction: Function
};

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2),
    width: '90%',
    boxShadow: '0 1px 6px rgba(0, 0, 0, .1), 0 1px 4px rgba(0, 0, 0, .1)'
  }
}));

const ToastButton = (props: Props) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      onClick={() =>
        props.toastAction('displayToast', {
          message: `${props.text}`,
          displayType: props.type
        })
      }
    >
      {props.text}
    </Button>
  );
};

export default connect(
  null,
  { toastAction }
)(ToastButton);

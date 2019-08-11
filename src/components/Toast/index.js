//@flow
import React from 'react';
import { connect } from 'react-redux';
import {
  Snackbar,
  Slide,
  IconButton,
  SnackbarContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { autoHideFunction } from './helper';

import closeAction from '../../action';

type Props = {
  toastState: boolean,
  message: string,
  toastType: string,
  closeAction: Function
};

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  },
  icon: {
    fontSize: 20
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main
  }
}));

function SlideTransition(props) {
  return <Slide {...props} direction="right" />;
}

let autoHideToast = 0;
let closeToast = 0;

const Toast = (props: Props) => {
  const classes = useStyles();
  const { toastType } = props || {};
  let toastNumber = 0;
  if (toastType === 'autoHide') {
    autoHideToast++;
    toastNumber = autoHideToast;
  } else if (toastType === 'closeMethod') {
    closeToast++;
    toastNumber = closeToast;
  }
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={props.toastState}
      onClose={(handle, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        props.closeAction('removeToast');
      }}
      TransitionComponent={SlideTransition}
      {...autoHideFunction(toastType)}
    >
      <SnackbarContent
        key={Date.now()}
        className={
          toastType === 'autoHide' ? classes.primary : classes.secondary
        }
        aria-describedby="message-id"
        message={
          <span id="message-id" className={classes.message}>
            {`${props.message} toast no: ${toastNumber}`}
          </span>
        }
        action={[
          <SnackAction
            toastType={props.toastType}
            closeAction={props.closeAction}
            key={Date.now()}
          />
        ]}
      />
    </Snackbar>
  );
};

const SnackAction = props => {
  const classes = useStyles();
  if (props.toastType === 'autoHide') {
    return null;
  }
  return (
    <IconButton
      key="close"
      aria-label="close"
      color="inherit"
      className={classes.close}
      onClick={() => props.closeAction('removeToast')}
    >
      <CloseIcon className={classes.icon} />
    </IconButton>
  );
};

const mapStateToProps = state => {
  return {
    toastState: state.toastDisplay,
    message: state.toastMessage,
    toastType: state.toastType
  };
};
export default connect(
  mapStateToProps,
  { closeAction }
)(Toast);

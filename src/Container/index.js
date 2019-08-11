//@flow
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from '../theme';
import type { Node } from 'react';
import Toast from '../components/Toast';

type Props = {
  children: Node
};

const Container = (props: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Toast />
      {props.children}
    </MuiThemeProvider>
  );
};

export default Container;

import React from 'react';
import { Provider } from 'react-redux';
import { Card, Container, Typography } from '@material-ui/core';
import MyApp from './Container';
import ToastButton from './components/ToastButton';
import store from './reducer';

const styles = {
  paper: {
    background: 'linear-gradient(#8497ee , #764ba2)',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <MyApp>
        <Container maxWidth="sm">
          <Typography component="div" style={{ ...styles.paper }}>
            <Card style={styles.card}>
              <ToastButton text="Toast with timeout" type="autoHide" />
              <ToastButton text="Toast with close button" type="closeMethod" />
            </Card>
          </Typography>
        </Container>
      </MyApp>
    </Provider>
  );
};

export default App;

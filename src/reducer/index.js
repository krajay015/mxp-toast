import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { DISPLAY_TOAST, HIDE_TOAST } from '../constant';

const initialState = {
  toastDisplay: false,
  toastMessage: '',
  toastType: ''
};

const toastReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case DISPLAY_TOAST:
      const { displayType, message } = payload || {};
      return {
        ...state,
        toastDisplay: true,
        toastMessage: message,
        toastType: displayType
      };
    case HIDE_TOAST:
      return {
        ...state,
        ...initialState
      };
    default:
      console.log('TYPE IN REDUCER: ', type);
      return state;
  }
};

const store = createStore(
  toastReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

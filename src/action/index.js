import { DISPLAY_TOAST, HIDE_TOAST } from '../constant';
import Stack from '../stack';
const stack = new Stack();

export default (type, ...args) => (dispatch: Function, getState: Function) => {
  switch (type) {
    case 'displayToast':
      stack.push(args[0]);
      if (!stack.init) {
        stack.init = true;
        return dispatch({ type: DISPLAY_TOAST, payload: stack.pop() });
      }
      break;
    case 'removeToast':
      console.log('remove toast ');
      dispatch({ type: HIDE_TOAST, payload: {} });
      if (stack.isLength()) {
        setTimeout(() => {
          dispatch({ type: DISPLAY_TOAST, payload: stack.pop() });
        }, 100);
      } else {
        stack.init = false;
      }
      break;

    default:
      console.log('Missing case handle: ', type);
  }
};

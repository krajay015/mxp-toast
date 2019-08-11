export const autoHideFunction = toastType => {
  if (toastType === 'autoHide') {
    return {
      autoHideDuration: 3000
    };
  }
  return {};
};

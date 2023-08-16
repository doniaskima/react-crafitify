export const allowLayoutCalculations = (callback: () => void) => {
  setTimeout(callback, 500);
};

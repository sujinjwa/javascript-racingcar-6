import OutputView from '../view/OutputView.js';

const hasError = (validate, input) => {
  try {
    validate(input);
    return false;
  } catch (error) {
    OutputView.print(error);
    return true;
  }
};

export default hasError;

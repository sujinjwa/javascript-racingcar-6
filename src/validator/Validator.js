const Validator = {
  length(cars) {
    if (cars.some((car) => car.length > 5)) {
      throw '[ERROR]';
    }
  },
};

export const validateCars = (cars) => {
  Validator.length(cars);
};

export const validateTryNumber = (tryNumber) => {};

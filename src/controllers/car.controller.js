const httpStatus = require('http-status');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchasync');
const CarService = require('../services/car.service');

const createCar = catchAsync(async (req, res) => {
  const {
    brand, color, model, modelYear, type,
  } = req.body;
  const car = await CarService.createCar({
    brand, color, model, modelYear, type,
  });
  res.status(httpStatus.CREATED).send(car);
});

const getFindCar = catchAsync(async (req, res) => {
  const { params: { id: _id } } = req;
  const car = await CarService.getCarById({ _id });
  res.status(httpStatus.OK).send(car);
});

const getFindAllCars = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  const cars = await CarService.getAllCars({ page, limit });
  res.status(httpStatus.OK).send(cars);
});

const updateCar = catchAsync(async (req, res) => {
  const { params: { id: _id }, body } = req;
  const modifyCar = await CarService.updateCarById({ _id, body });

  res.status(httpStatus.OK).send(modifyCar);
});

const deleteCar = catchAsync(async (req, res) => {
  const { params: { id: _id } } = req;
  const delCar = await CarService.deleteCarById({ _id });
  res.status(httpStatus.OK).send(delCar);
});

module.exports = {
  createCar,
  getFindCar,
  getFindAllCars,
  updateCar,
  deleteCar,
};

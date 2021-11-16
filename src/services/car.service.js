const httpStatus = require('http-status');
const Car = require('../models/cars');
const ApiError = require('../utils/ApiError');

const createCar = async (carBody) => {
  const insertCar = await Car.create(carBody);
  if (!insertCar) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Car Creation Failed!');
  }

  return { message: 'Car created Successfully!' };
};

const getCarById = async (carID) => {
  const { _id } = carID;
  const findCar = await Car.findOne({ _id });
  if (!findCar) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Car Found against this ID');
  }
  return findCar;
};

const getAllCars = async (paginationObj) => {
  const { page, limit } = paginationObj;
  const offset = (page - 1) * limit;
  const cars = await Car.find().limit(limit).skip(offset).exec();
  return cars;
};

const updateCarById = async (updateCarObj) => {
  const { _id, body } = updateCarObj;
  const updates = Object.keys(body);

  const car = await Car.findOne({ _id });

  if (!car) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Car doesnt exist!!!');
  }

  const carProperties = ['brand', 'color', 'model', 'modelYear', 'type'];
  const isValid = updates.every((update) => carProperties.includes(update));

  if (!isValid) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Inputs are Invalid!!!');
  }

  updates.forEach((update) => { car[update] = body[update]; });

  await car.save();

  const response = {
    message: 'Car Updated Successfully!!!',
  };

  return response;
};

const deleteCarById = async (carID) => {
  const { _id } = carID;
  const car = await Car.findByIdAndDelete({ _id });

  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Car Found against this ID');
  }

  const response = {
    message: 'Car Deleted Successfully!!!',
  };
  return response;
};

module.exports = {
  createCar,
  getCarById,
  getAllCars,
  updateCarById,
  deleteCarById,
};

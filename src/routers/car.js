const express = require('express');
// const auth = require('../middleware/auth');

const router = new express.Router();
const carController = require('../controllers/car.controller');
const validateDto = require('../middleware/validate.dto');
const carSchema = require('../validations/car.validation');
// Routers for cars (HTTP Method : post,get,patch and delete)

router.post('/cars', validateDto(carSchema), carController.createCar);

router.get('/cars/:id', carController.getFindCar);

router.get('/cars', carController.getFindAllCars);

router.patch('/cars/:id', carController.updateCar);

router.delete('/cars/:id', carController.deleteCar);

module.exports = router;

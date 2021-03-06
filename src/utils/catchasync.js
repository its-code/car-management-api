const ApiError = require('./ApiError');

// eslint-disable-next-line consistent-return
const catchAsync = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (err) {
    if (err instanceof ApiError) {
      return res.status(err.statusCode).send({ status: 'error', message: err.message });
    }
  }
};

module.exports = catchAsync;

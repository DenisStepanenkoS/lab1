const { user } = require('./../models');
const createError = require('http-errors');
module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await user.create(body);
    if (!createdUser) {
      return next(createError(400, 'Something went wrong'));
    }
    res.status(201).send(createdUser);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  const { pagination } = req;
  try {
    const foundUsers = await user.getAll(pagination);
    res.status(200).send(foundUsers);
  } catch (err) {
    next(err);
  }
};

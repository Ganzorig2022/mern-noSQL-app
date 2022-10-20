const fs = require('fs');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');
const Place = require('../models/place');
const User = require('../models/user');

//localhost:5000/api/places/634d4df4392602322e1719b4
const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;

  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a place',
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      'Could not find a place for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ place: place.toObject({ getters: true }) });
};

//localhost:5000/api/places/user/634d4df4392602322e1719b4
const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithPlaces;

  //ijil user ID-tai "places" collection-uudiig "user" collection dotorh user-iin "places" field dotor ni "populate" gj array bolgood user-iin object dotor ni nemj ogow. {userobj, places:[{},{}] } etc.
  try {
    userWithPlaces = await User.findById(userId).populate('places');
  } catch (err) {
    const error = new HttpError(
      'Fetching places failed, please try again later',
      500
    );
    return next(error);
  }

  if (!userWithPlaces || userWithPlaces.places.length === 0) {
    return next(
      new HttpError('Could not find places for the provided user id.', 404)
    );
  }

  res.json({
    places: userWithPlaces.places.map((place) =>
      place.toObject({ getters: true })
    ),
  });
};

//localhost:5000/api/places
const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { title, description, address } = req.body;

  let coordinates;

  //getting coordinates from GOOGLE MAP, PLACES API
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = new Place({
    title,
    description,
    location: coordinates,
    image: req.file.path,
    creator: req.userData.userId, //comes from "check-auth.js" newly created "userData" object.
  });

  let user;

  try {
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError('Creating place failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('We could not find user for provided id', 404);
    return next(error);
  }

  //save new data to "places" collection. But also add "places" field of "users" collection's user data.
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    createdPlace.save({ session: sess });
    user.places.push(createdPlace);
    await user.save({ session: sess });
    sess.commitTransaction();
  } catch (err) {
    const error = new HttpError('Creating place failed, please try again', 500);

    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

//========================================================================================
const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  place.title = title;
  place.description = description;

  //Check if logged user who actually created this document or not. If user is not created it, then can not update document.
  // mongoose special object id. SHould convert to normal STRING.
  if (place.creator.toString() !== req.userData.userId) {
    const error = new HttpError('You are not allowed to edit this place.', 401);
    return next(error);
  }

  try {
    await place.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ place: place.toObject({ getters: true }) });
};

//========================================DELETE====================================
const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;

  try {
    //populate method ni tuhain doc-iig uusgesen hereglegchiin data-g "places" collection-iin doc-d hawsargaj oruulj ogoh bolomjtoi bolgodog.
    place = await Place.findById(placeId).populate('creator');
  } catch (err) {
    const error = new HttpError('Could not find a place for that id.', 500);
    return next(error);
  }

  if (!place) {
    const error = new HttpError('Could not find the place for this id.', 404);
    return next(error);
  }

  //Check if logged user who actually created this document or not. If user is not created it, then can not update document.
  if (place.creator.id !== req.userData.userId) {
    const error = new HttpError(
      'You are not allowed to delete this place.',
      401
    );
    return next(error);
  }

  const imagePath = place.image;
  //delete place from users collection's "places" [] array.
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something wen wrong, could not delete place.',
      500
    );
    return next(error);
  }

  fs.unlink(imagePath, (err) => {
    console.log(err);
  });
  res.status(200).json({ message: 'Deleted place.' });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;

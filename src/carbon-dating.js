const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  throw new CustomError('Not implemented');

  if (sampleActivity !== null &&
    sampleActivity !== undefined &&
    /^[0-9]&/.test(sampleActivity)) {

    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity.toInteger()) /
      Math.LN2 / HALF_LIFE_PERIOD);

  } else {

    return false;

  }
};
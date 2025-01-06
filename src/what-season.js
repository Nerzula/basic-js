const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    return 'Invalid date!';
  }

  const month = date.getMonth();
  let season;

  switch (month) {
    case 0:
    case 1:
    case 2:
      season = 'spring';
      break;
    case 3:
    case 4:
    case 5:
      season = 'summer';
      break;
    case 6:
    case 7:
    case 8:
      season = 'autumn';
    default:
      season = 'winter';
      break;
  }
  return season;
}

module.exports = {
  getSeason
};

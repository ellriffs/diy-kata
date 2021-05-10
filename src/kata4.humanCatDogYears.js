const humanCatDogYears = number => {
  let catYears = 15;
  let dogYears = 15;

  if (number > 1) {
    catYears = (catYears + 9);
    dogYears  =(dogYears+ 9);
  }
  if (number > 2) {
    catYears = catYears + (number - 2) * 4;
    dogYears = dogYears + (number - 2) * 5;
  }
  return [number, catYears, dogYears];
};
module.exports = humanCatDogYears;

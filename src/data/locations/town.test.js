import towns from './town';

it('contains the proper number of towns', () => {
  expect(towns.length).toBe(9);
});

it('has only and all the right properties for every town', () => {
  expect(towns.every(town => {
    const hasCorrectProperties = town.hasOwnProperty('coordinates') && town.hasOwnProperty('name');
    const onlyHaveTwoProperties = Object.keys(town).length === 2;
    const propertiesHasCorrectType = Array.isArray(town.coordinates) && typeof town.name === 'string';
    const hasCoordinatesWithCorrectType = town.coordinates.every(coordinate => typeof coordinate === 'number');
    return  hasCorrectProperties && propertiesHasCorrectType && hasCoordinatesWithCorrectType && onlyHaveTwoProperties;
  })).toBe(true);
});

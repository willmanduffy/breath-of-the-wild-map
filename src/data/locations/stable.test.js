import stables from './stable';

it('contains the proper number of stables', () => {
  expect(stables.length).toBe(15);
});

it('has only and all the right properties for every stable', () => {
  expect(stables.every(stable => {
    const hasCorrectProperties = stable.hasOwnProperty('coordinates') && stable.hasOwnProperty('name');
    const onlyHaveTwoProperties = Object.keys(stable).length === 2;
    const propertiesHasCorrectType = Array.isArray(stable.coordinates) && typeof stable.name === 'string';
    const hasCoordinatesWithCorrectType = stable.coordinates.every(coordinate => typeof coordinate === 'number');
    return  hasCorrectProperties && propertiesHasCorrectType && hasCoordinatesWithCorrectType && onlyHaveTwoProperties;
  })).toBe(true);
});

import shrines from './shrine';

it('contains the proper number of shrines', () => {
  expect(shrines.length).toBe(120);
});

it('has only and all the right properties for every shrine', () => {
  expect(shrines.every(shrine => {
    const hasCorrectProperties = shrine.hasOwnProperty('coordinates') && shrine.hasOwnProperty('name');
    const onlyHaveTwoProperties = Object.keys(shrine).length === 2;
    const propertiesHasCorrectType = Array.isArray(shrine.coordinates) && typeof shrine.name === 'string';
    const hasCoordinatesWithCorrectType = shrine.coordinates.every(coordinate => typeof coordinate === 'number');
    return  hasCorrectProperties && propertiesHasCorrectType && hasCoordinatesWithCorrectType && onlyHaveTwoProperties;
  })).toBe(true);
});

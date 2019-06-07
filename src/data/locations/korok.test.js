import korok from './korok';

it('contains the proper number of koroks', () => {
  expect(korok.length).toBe(900);
});

it('has only and all the right properties for every seed', () => {
  expect(korok.every(seed => {
    const hasCorrectProperties = seed.hasOwnProperty('coordinates') && seed.hasOwnProperty('instructionType');
    const onlyHaveTwoProperties = Object.keys(seed).length === 2;
    const propertiesHasCorrectType = Array.isArray(seed.coordinates) && typeof seed.instructionType === 'number';
    const hasCoordinatesWithCorrectType = seed.coordinates.every(coordinate => typeof coordinate === 'number');
    return  hasCorrectProperties && propertiesHasCorrectType && hasCoordinatesWithCorrectType && onlyHaveTwoProperties;
  })).toBe(true);
});

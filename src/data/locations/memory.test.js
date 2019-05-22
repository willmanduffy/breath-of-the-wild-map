import memories from './memory';

it('contains the proper number of memories', () => {
  expect(memories.length).toBe(12);
});

it('has only and all the right properties for every single memory', () => {
  expect(memories.every(memory => {
    const hasCorrectProperties = memory.hasOwnProperty('coordinates') && memory.hasOwnProperty('name');
    const onlyHaveTwoProperties = Object.keys(memory).length === 2;
    const propertiesHasCorrectType = Array.isArray(memory.coordinates) && typeof memory.name === 'string';
    const hasCoordinatesWithCorrectType = memory.coordinates.every(coordinate => typeof coordinate === 'number');
    return  hasCorrectProperties && propertiesHasCorrectType && hasCoordinatesWithCorrectType && onlyHaveTwoProperties;
  })).toBe(true);
});

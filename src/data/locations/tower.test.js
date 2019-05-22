import towers from './tower';

it('contains the proper number of towers', () => {
  expect(towers.length).toBe(15);
});

it('has only and all the right properties for every tower', () => {
  expect(towers.every(tower => {
    const hasCorrectProperties = tower.hasOwnProperty('coordinates') && tower.hasOwnProperty('name');
    const onlyHaveTwoProperties = Object.keys(tower).length === 2;
    const propertiesHasCorrectType = Array.isArray(tower.coordinates) && typeof tower.name === 'string';
    const hasCoordinatesWithCorrectType = tower.coordinates.every(coordinate => typeof coordinate === 'number');
    return  hasCorrectProperties && propertiesHasCorrectType && hasCoordinatesWithCorrectType && onlyHaveTwoProperties;
  })).toBe(true);
});

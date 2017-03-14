import Leaflet from 'leaflet';

const shrineIcon = Leaflet.icon({
  className: 'blue-glow',
  iconSize: [27, 26],
  iconUrl: '/images/icons/shrine.png'
});

const stableIcon = Leaflet.icon({
  iconSize: [30, 30],
  iconUrl: '/images/icons/stable.png'
});

const towerIcon = Leaflet.icon({
  className: 'blue-glow',
  iconSize: [28, 38],
  iconUrl: '/images/icons/tower.png'
});

const townIcon = Leaflet.icon({
  iconSize: [30, 30],
  iconUrl: '/images/icons/town.png'
});

export const icons = {
  town: {
    displayName: 'Towns',
    icon: townIcon
  },
  stable: {
    displayName: 'Stables',
    icon: stableIcon
  },
  tower: {
    displayName: 'Towers',
    icon: towerIcon
  },
  shrine: {
    displayName: 'Shrines',
    icon: shrineIcon
  }
}
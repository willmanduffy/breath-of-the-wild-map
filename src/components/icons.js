import Leaflet from 'leaflet';

const towerIcon = Leaflet.icon({
  iconSize: [28, 38],
  iconUrl: '/images/icons/tower.png'
});

const townIcon = Leaflet.icon({
  iconSize: [30, 30],
  iconUrl: '/images/icons/town.png'
});

export const icons = {
  tower: towerIcon,
  town: townIcon
}
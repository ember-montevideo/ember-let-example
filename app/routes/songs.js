import Ember from 'ember';

const songs = [
  {
    "artist": {
      "name": "Sumo"
    },
    "name": "Crua Chan"
  },
  {
    "album": {
      "name": "Let It Be",
      "studios": ["Abbey Road", "Apple"]
    },
    "artist": {
      "name": "The Beatles"
    },
    "name": "For You Blue"
  }
];

export default Ember.Route.extend({
  model() {
    return songs;
  }
});

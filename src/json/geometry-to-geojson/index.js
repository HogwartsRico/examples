var map = new maptalks.Map('map', {
  center: [-0.113049,51.498568],
  zoom: 14,
  attribution: {
    content: '$(attribution)'
  },
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  }),
  layers : [
    new maptalks.VectorLayer('v')
  ]
});

var marker = new maptalks.Marker([-0.113049,51.498568], {
  'properties': {
    'name': 'point marker'
  }
}).addTo(map.getLayer('v'));

document.getElementById('info').innerHTML = JSON.stringify(marker.toGeoJSON());

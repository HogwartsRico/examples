var map = new maptalks.Map('map', {
  center: [-0.113049,51.49856],
  zoom: 14,
  attribution: {
    content: '$(attribution)'
  },
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var coordinate = map.getCenter().toFixed(3);

var options = {
  'single' : false,
  'width'  : 183,
  'height' : 105,
  'custom' : true,
  'dx' : -3,
  'dy' : -12,
  'content'   : '<div class="content">' +
    '<div class="pop_title">Custom InfoWindow</div>' +
    '<div class="pop_time">' + new Date().toLocaleTimeString() + '</div><br>' +
    '<div class="pop_dept">' + coordinate.x + '</div>' +
    '<div class="pop_dept">' + coordinate.y + '</div>' +
    '<div class="arrow"></div>' +
    '</div>'
};
var infoWindow = new maptalks.ui.InfoWindow(options);
infoWindow.addTo(map).show(coordinate);

map.on('click', function (e) {
  infoWindow.show(e.coordinate);
});

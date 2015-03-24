var weightedCentroid = require('../'),
    test = require('tape'),
    fs = require('fs');

test('mean center', function (t){
  var fc = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/featureCollection.geojson'));

  var center = weightedCentroid(fc);
  t.ok(center);

  fs.writeFileSync(__dirname+'/fixtures/out/meanCenter_out.geojson', JSON.stringify(center));
  t.end();
});

test('weighted mean center', function (t){
  var fc = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/featureCollection.geojson'));

  var weightedCenter = weightedCentroid(fc, 'weight');
  t.ok(weightedCenter);

  fs.writeFileSync(__dirname+'/fixtures/out/weightedMeanCenter_out.geojson', JSON.stringify(weightedCenter));
  t.end();
});

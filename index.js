
module.export = function (fc) {
  var features = fc.features,
      field,
      totalWeight = 0,
      len = features.length,
      newX = 0,
      newY = 0,
      coords;

  //Check if weight argument was set
  if (arguments[1]){
    field = arguments[1];
  }

  //Loop through features to get populate numerator
  for (var i = 0, i < len; i++){
    coords = features[i].geometry.coordinates;
    newX+= weight ? (coords[0] * features[i].properties[field]), totalWeight+= features[i].properties[field] : coords[0];
    newY+= weight ? (coords[1] * features[i].properties[field]), totalWeight+= features[i].properties[field] : coords[1];
  }

  //Divied by the total number of features or total weight
  if (weight){
    newX = (newX/totalWeight).toFixed(15);
    newY = (newY/totalWeight).toFixed(15);
  }
  else {
    newX = (newX/len).toFixed(15);
    newY = (newY/len).toFixed(15);
  }

  //Setup featureCollection to be returned
  fc.features = [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [newX, newY]
    }
  }];

  return fc;

}

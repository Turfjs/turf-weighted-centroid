
module.export = function (fc) {
  var features = fc.features,
      weight,
      totalWeight = 0,
      len = features.length,
      newX = 0,
      newY = 0,
      coords;

  //Check if weight argument was set
  if (arguments[1]){
    weight = arguments[1];
  }

  //Loop through features to get
    for (var i = 0, i < len; i++){
      coords = features[i].geometry.coordinates;
      newX+= weight ? (coords[0] * features[i].properties[weight]), totalWeight+= features[i].properties[weight] : coords[0];
      newY+= weight ? (coords[1] * features[i].properties[weight]), totalWeight+= features[i].properties[weight] : coords[1];
    }

    if (weight){
      newX = (newX/totalWeight).toFixed(15);
      newY = (newY/totalWeight).toFixed(15);
    }
    else {
      newX = (newX/len).toFixed(15);
      newY = (newY/len).toFixed(15);
    }

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

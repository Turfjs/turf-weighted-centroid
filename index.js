/**
 * Takes a {@link FeatureCollection} and returns the mean center.
 *
 * @module turf/weighted-centroid
 * @category transformation
 * @param {FeatureCollection<Point>} points to generate mean center
 * @param {String} parameter with weight
 * @return {FeatureCollection} of mean center
 * @example
 *  var fc = {
 *    "type": "FeatureCollection",
 *    "features": [
 *    {
 *      "type": "Feature",
 *      "properties": {
 *          "weight": 0.5
 *      },
 *      "geometry": {
 *        "type": "Point",
 *        "coordinates": [
 *          -71.0121549591422,
 *          32.4197873440115
 *        ]
 *      }
 *    },
 *    {
 *      "type": "Feature",
 *      "properties": {
 *        "weight": 0.3
 *      },
 *      "geometry": {
 *        "type": "Point",
 *        "coordinates": [
 *          -78.662109375,
 *          35.79999392988527
 *        ]
 *      }
 *    },
 *    {
 *      "type": "Feature",
 *      "properties": {
 *        "weight": 0.15
 *      },
 *      "geometry": {
 *        "type": "Point",
 *        "coordinates": [
 *          -78.90380859375,
 *          32.58384932565662
 *        ]
 *      }
 *    },
 *    {
 *      "type": "Feature",
 *      "properties": {
 *        "weight": 0.05
 *      },
 *      "geometry": {
 *       "type": "Point",
 *        "coordinates": [
 *          -74.8854720108211,
 *          32.58384932565662
 *        ]
 *      }
 *    }
 *  ]
 *}
 * var field = 'weight';
 *
 * var center = turf.weightedCentroid(
 *  fc, field);
 *
 * //=return
 *
 *
 */
module.exports = function (fc) {
  var features = fc.features,
      field,
      totalWeight = 0,
      len = features.length,
      newX = 0,
      newY = 0,
      coords;

  //Check if weight argument was set
  if (arguments[1] && typeof arguments[1] === 'string'){
    field = arguments[1];
  }

  //Loop through features to populate numerator
  for (var i = 0; i < len; i++){
    coords = features[i].geometry.coordinates;
    newX+= field ? (coords[0] * features[i].properties[field]) : coords[0];
    newY+= field ? (coords[1] * features[i].properties[field]) : coords[1];
    totalWeight+= field ? features[i].properties[field] : 0;
  }

  //Divied by the total number of features or total weight
  if (field){
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

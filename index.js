var point = require('turf-point');

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
 */
module.exports = function (fc, weightField) {
  var features = fc.features, totalWeight = 0, len = features.length, xSum = 0, ySum = 0, coords;
  for (var i = 0; i < len; i++){
    coords = features[i].geometry.coordinates;
    xSum+= coords[0] * features[i].properties[weightField];
    ySum+= coords[1] * features[i].properties[weightField];
    totalWeight+= features[i].properties[weightField];
  }
  xSum = xSum / totalWeight;
  ySum = ySum / totalWeight;
  return point([xSum, ySum]);

}

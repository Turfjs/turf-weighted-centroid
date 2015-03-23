# turf-buffer



turf mean center module


### `turf.mean-center(points, weightField)`

Calculates a the mean center for all point features in a FeatureCollection and returns a new feature representing the mean center.


### Parameters

| parameter     | type                          | description                             |
| --------------| ------------------------------| ----------------------------------------|
| `points`      | FeatureCollection\.\<Point\>  | points to find mean center              |
| `weightField` | String                        | optional: the parameter that contains weight data |

### Example

```js
var points = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
          "weight": 0.5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -71.0121549591422,
          32.4197873440115
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "weight": 0.3
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.662109375,
          35.79999392988527
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "weight": 0.15
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.90380859375,
          32.58384932565662
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "weight": 0.05
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.8854720108211,
          32.58384932565662
        ]
      }
    }
  ]
};

var center = turf.meanCenter(
  fc, 'weight');

//=center
```

**Returns** `FeatureCollection.<Point>`, point at the mean center

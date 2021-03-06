const test = require('ava')

const {toPoints, fromPoints, toString} = require('./index')

test('toPoints: Creates an array of points from a populated geom3', (t) => {
  const points = [[[0, 0, 0], [1, 0, 0], [1, 0, 1]]]
  const geometry = fromPoints(points)

  toString(geometry)

  const expected = [[new Float32Array([0, 0, 0]), new Float32Array([1, 0, 0]), new Float32Array([1, 0, 1])]]
  const pointarray = toPoints(geometry)
  t.deepEqual(pointarray, expected)

  toString(geometry)
})

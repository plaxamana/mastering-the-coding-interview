// Edge list
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const graph3 = [
// 0  1  2  3
  [0, 0, 1, 0], // node 0 -> 2
  [0, 0, 1, 1], // node 1 -> 2, 3
  [1, 1, 0, 1], // node 2 -> 0, 1, 3
  [0, 1, 1, 0], // node 3 -> 1, 2
];

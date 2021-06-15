# Graphs

![Graphs](./graphs.png)
![Graphs Explanation](./graphs2.png)

Graphs are really great to represent real-world networks. They can be used in social networks, recommendation engines, google maps, etc.

## Types of Graphs

![Directed vs Undirected Graphs](./directed_vs_undirected.png)

- Undirected graph: think of a two way street
- Directed graph: one way street
  - Twitter
  - Youtube Subscriptions

![Weighted Graphs](./weighted_graphs.png)
![Cyclic vs Acyclic Graphs](./cyclic_vs_acyclic.png)

- Cyclic: when you can go from one node to another in a circle
- Acyclic: you can go from one node to another and back, but not in a circle

### Undirected unweighted cyclic graph

![Undirected unweighted cyclic graph](./graph1.png)

### Undirected weighted cyclic graph

![Undirected weighted cyclic graph](./graph2.png)

### Directed unweighted acyclic graph

![Directed unweighted acyclic graph](./graph3.png)

### Directed weighted acyclic graph

![Directed weighted acyclic graph](./graph4.png)

### Directed acyclic graph

![Directed acyclic graph](./graph5.png)

## Graph Example

![Graph Example](./graph_example.png)

```js
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
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
```
### Pros and Cons of Graphs

Very useful when it comes to relationships.  Finding the shortest path, traversing the graph (relationships is important)

| Pros          | Cons            |
| ------------- | --------------- |
| Relationships | Scaling is hard |

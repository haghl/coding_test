var fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input.slice(2).map((x) => x.split(" "));
const graph = {};

for (let i = 0; i < list.length; i++) {
  const a = list[i];
  if (graph[a[0]]) {
    graph[a[0]] = [...graph[a[0]], a[1]];
  } else {
    graph[a[0]] = [a[1]];
  }
  if (graph[a[1]]) {
    graph[a[1]] = [...graph[a[1]], a[0]];
  } else {
    graph[a[1]] = [a[0]];
  }
}

function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);

  if (graph[node]) {
    for (let neighbor of graph[node]) {
      dfs(graph, neighbor, visited);
    }
  }

  return visited.size - 1;
}
const result = dfs(graph, "1");

console.log(result);
// console.log(`graph :`, graph);

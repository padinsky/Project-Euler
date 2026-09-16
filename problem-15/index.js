function latticePaths(rows, cols) {
  const path = Array(rows + 1).fill().map(() => Array(cols + 1).fill(0));
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      if (i === 0 || j === 0) {
        path[i][j] = 1;
      } else {
        path[i][j] = path[i - 1][j] + path[i][j - 1];
      }
    }
  }
  return path[rows][cols];
}

console.log(latticePaths(20, 20));
const transpose = function(matrix) {
  let resultingArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    resultingArray.push(row);
  }
  return resultingArray;
};

const searchLines = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
};

const wordSearch = (letters, word) => {
  if (searchLines(letters, word)) {
    return true;
  }
  const newMatrix = transpose(letters);
  if (searchLines(newMatrix, word)) {
    return true;
  }
  return false;
};

module.exports = wordSearch;



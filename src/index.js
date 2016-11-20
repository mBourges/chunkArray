function chunkArray(array, depth) {
  if (typeof depth !== 'number') {
    throw new Error('Depth have to be a number');
  }

  if (depth <= 0) {
    throw new Error('Depth cannot be superior to 0');
  }

  return array.reduce(
    (accumulator, currentValue, currentIndex, initial) => extractChunks(
      accumulator,
      currentIndex,
      initial,
      depth
    ), []
  );
}

function extractChunks(accumulator, currentIndex, initial, depth) {
  return (!(currentIndex % depth))
      ? accumulator.concat([initial.slice(currentIndex, currentIndex + depth)])
      : accumulator;
}

module.exports = chunkArray;
export default chunkArray;

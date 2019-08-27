let memoizedValue = null;

function shuffleArray(array, memoized) {
  if (memoizedValue && memoizedValue.includes(array[0])) {
    return memoizedValue;
  }

  if (!memoizedValue || memoized) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    if (memoized) {
      memoizedValue = array;
    }

    return array;
  }

  return memoizedValue;
}

export default shuffleArray;

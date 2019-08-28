function randomNumber(end, start) {
  const { floor, random } = Math;

  if (start) {
    return floor(random() * end) + start;
  }
  return floor(random() * end);
}

export default randomNumber;

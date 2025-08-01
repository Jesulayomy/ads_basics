const sortCallsByStartTimestamp = (calls) => {
  return calls.sort((a, b) => a.startTimestamp - b.startTimestamp);
}

module.exports = { sortCallsByStartTimestamp };
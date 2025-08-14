function sortByTimestamp(calls){
  return calls.sort((callA, callB) => callA.startTimestamp - callB.startTimestamp);
}

export default sortByTimestamp;

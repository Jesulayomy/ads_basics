function updateActiveCalls(activeCalls, newCall) {
  activeCalls = activeCalls.filter(call => call.endTimestamp > newCall.startTimestamp);

  activeCalls.push(newCall);

  return activeCalls;
}

module.exports = { updateActiveCalls };

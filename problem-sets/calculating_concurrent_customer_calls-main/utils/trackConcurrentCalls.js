const { updateActiveCalls } = require("./updateActiveCalls");

function trackConcurrentCalls(sortedCalls) {
  let activeCalls = [];
  let maxConcurrentCalls = 0;
  let peakTimestamps = [];
  let peakCallIds = [];

  sortedCalls.forEach((call) => {
    activeCalls = updateActiveCalls(activeCalls, call);

    if (activeCalls.length > maxConcurrentCalls) {
      maxConcurrentCalls = activeCalls.length;
      peakTimestamps = [call.startTimestamp];
      peakCallIds = activeCalls.map((activeCall) => activeCall.callId);
    } else if (activeCalls.length === maxConcurrentCalls) {
      peakTimestamps.push(call.startTimestamp);
    }
  });

  const peakTimestamp = peakTimestamps.length > 0 ? peakTimestamps[0] : null;

  return { maxConcurrentCalls, peakTimestamp, callIds: peakCallIds };
}

module.exports = { trackConcurrentCalls };

import sortByTimestamp from "./sortByTimestamp.js";

function getMaxIntervalData(calls) {
  const callIntervals = [];
  const activeCalls = new Set();
  let maxCallIds = [];
  let peakTime = 0;
  let maxInterval = 0;
  let counter = 0;

  // Using an annotated timeline array
  for (const call of calls) {
    callIntervals.push(
      {
        callId: call.callId,
        startTimestamp: call.startTimestamp,
        callTransition: 1
      },
      {
        callId: call.callId,
        startTimestamp: call.endTimestamp,
        callTransition: -1
      }
    );
  }
  const sortedCallIntervals = sortByTimestamp(callIntervals);
  console.log(sortedCallIntervals)
  for (const call of sortedCallIntervals) {
    if (call.callTransition === 1) {
      counter += 1;
      activeCalls.add(call.callId);
    } else if (call.callTransition === -1) {
      counter -= 1;
      activeCalls.delete(call.callId);
    }
    if (maxInterval < counter) {
      maxCallIds = Array.from(activeCalls);
      maxInterval = counter;
      peakTime = call.startTimestamp;
    }
  }

  return {
    maxConcurrentCalls: maxInterval,
    timestamp: peakTime,
    callIds: maxCallIds
  };
}

export default getMaxIntervalData;

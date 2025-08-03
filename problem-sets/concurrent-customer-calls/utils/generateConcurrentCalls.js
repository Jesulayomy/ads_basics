const DECIMAL = 10;

/**
 * @param {list} calls for a specific customer and date
 * @returns sorted calls by timestamp
 */
function sortByTimestamp(calls) {
  return calls.sort(
    (callA, callB) => callA.startTimestamp - callB.startTimestamp
  );
}
function sortByTimes(calls) {
  return calls.sort(
    (callA, callB) => callA.timestamp - callB.timestamp
  );
}


function getMaxConcurrencyData(calls) {
  const callIntervals = [];
  const activeCalls = new Set();
  let maxActiveCalls = [];
  let maxConcurrentCalls = 0;
  let counter = 0;
  let peakTime = 0;

  for (const call of calls) {
    callIntervals.push(
      {
        callId: call.callId,
        timestamp: call.startTimestamp,
        callTransition: 1 // Starting call
      },
      {
        callId: call.callId,
        timestamp: call.endTimestamp,
        callTransition: -1 // Ending call
      }
    );
  }

  const sortedCallIntervals = sortByTimes(callIntervals);
  for (const call of sortedCallIntervals) {
    if (call.callTransition === -1) {
      counter--;
      activeCalls.delete(call.callId);
    } else if (call.callTransition === 1) {
      counter++;
      activeCalls.add(call.callId)
    }
    if (maxConcurrentCalls < counter) {
      maxActiveCalls = Array.from(activeCalls);
      peakTime = call.timestamp;
      maxConcurrentCalls = counter;
    }
  }
  return {maxConcurrentCalls, concurrentCallIds: maxActiveCalls, peakTime};
}


function generateConcurrentCalls(groupedCalls) {
  const concurrentCalls = [];

  for (const customerId in groupedCalls) {
    for (const date in groupedCalls[customerId]) {
      const sortedGroupedCalls = sortByTimestamp(
        groupedCalls[customerId][date]
      );
      if (sortedGroupedCalls.length === 0) continue;

      const maxConcurrencyData = getMaxConcurrencyData(sortedGroupedCalls);
      const { maxConcurrentCalls, concurrentCallIds, peakTime } = maxConcurrencyData;
      concurrentCalls.push({
        customerId: parseInt(customerId, DECIMAL),
        date,
        maxConcurrentCalls,
        callIds: concurrentCallIds,
        timestamp: peakTime,
      });
    }
  }

  return concurrentCalls;
}

export default generateConcurrentCalls;

/**
 * Returns a string representation of a date
 * @param {number} timestamp - time in unix ms
 * @returns a string in yyyy-mm-dd format
 */
function formatDate(timestamp) {
  return new Date(timestamp).toISOString().split("T")[0];
}

/**
 * timeStampToDays splits the call into all the dates it spans.
 * @param {Date} startTime The timestamp the call started
 * @param {Date} endTime The time the call ended
 * @returns The calls spanning days
 */
function timestampToDays(startTime, endTime) {
  const calls = [];
  let startDay = startTime;
  while (startDay < endTime) {
    let endDay = new Date(startDay).setUTCHours(23, 59, 59, 999);

    calls.push({
      dayStart: startDay,
      dayEnd: Math.min(endDay, endTime),
      day: formatDate(startDay)
    });

    startDay = endDay + 1;
  }

  return calls;
}

/**
 * 
 * @param {list} customerCalls The customer calls array from the API
 * @returns calls grouped by customer and date. Ex:
 * const groupedByCustomerAndDate = {
 *   '1': {'2025-01-01': [callA, callB, callC]},
 *   ...
 * }
 * const callA = {
 *   callId: "303b0b55-ea59-4192-bcfb-26858080bba8",
 *   startTimestamp: 1705061460000,
 *   endTimestamp: 1705061490000
 * }
 */
function groupByCustomerAndDate(customerCalls) {
  let groupedCalls = {};
  for (let call of customerCalls) {
    const customerId = call.customerId;
    const callsByDay = timestampToDays(call.startTimestamp, call.endTimestamp);

    callsByDay.forEach(({ dayStart, dayEnd }) => {
      const date = formatDate(dayStart);
      if (!groupedCalls.hasOwnProperty(customerId)) {
        groupedCalls[customerId] = {};
      }
      if (!groupedCalls[customerId].hasOwnProperty(date)) {
        groupedCalls[customerId][date] = [];
      }

      groupedCalls[customerId][date].push({
        callId: call.callId,
        startTimestamp: dayStart,
        endTimestamp: dayEnd
      });
    });
  }
  return groupedCalls;
}

export default groupByCustomerAndDate;

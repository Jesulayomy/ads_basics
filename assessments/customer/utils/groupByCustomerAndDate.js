import timestampToDate from './timestampToDate.js';
import callTimesToDays from './callTimesToDays.js';
import sortByTimestamp from './sortByTimestamp.js';


function groupByCustomerAndDate(callRecords) {
  const groupedCalls = {};
  for (const call of callRecords) {
    const customerId = call.customerId;
    const callsByDate = callTimesToDays(call.startTimestamp, call.endTimestamp);

    for (const callOnDate of callsByDate) {
      const date = callOnDate.date;

      if (!groupedCalls.hasOwnProperty(customerId)) {
        groupedCalls[customerId] = {};
      }
      if (!groupedCalls[customerId].hasOwnProperty(date)) {
        groupedCalls[customerId][date] = [];
      }

      groupedCalls[customerId][date].push({
        callId: call.callId,
        startTimestamp: callOnDate.startTimestamp,
        endTimestamp: callOnDate.endTimestamp,
      })
    }
  }

  return groupedCalls;
}

export default groupByCustomerAndDate;

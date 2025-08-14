import getMaxIntervalData from "./getMaxIntervalData.js";
import sortByTimestamp from "./sortByTimestamp.js";

function getConcurrencyResults(callsByIdAndDate) {
  const billingData = [];

  for (const customerId in callsByIdAndDate) {
    for (const date in callsByIdAndDate[customerId]) {
      // console.log(callsByIdAndDate[customerId][date]);
      const sortedCustomerCallsOnDate = sortByTimestamp(
        callsByIdAndDate[customerId][date]
      );
      if (sortedCustomerCallsOnDate.length === 0) continue;

      const maxConcurrencyData = getMaxIntervalData(sortedCustomerCallsOnDate);
      const { maxConcurrentCalls, timestamp, callIds } = maxConcurrencyData;

      billingData.push({
        customerId: parseInt(customerId, 10),
        date,
        maxConcurrentCalls,
        callIds,
        timestamp,
      });
    }
  }

  return billingData;
}

export default getConcurrencyResults;

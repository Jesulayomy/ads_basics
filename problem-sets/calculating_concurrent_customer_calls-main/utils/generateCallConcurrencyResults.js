const { trackConcurrentCalls } = require("./trackConcurrentCalls");
const { sortCallsByStartTimestamp } = require("./sortCallsByStartTimestamp");

const generateCallConcurrencyResults = (groupedData) => {
  const results = [];
  const processedEntries = new Set();

  for (const customerId in groupedData) {
    for (const date in groupedData[customerId]) {
      const sortedCalls = sortCallsByStartTimestamp(
        groupedData[customerId][date]
      );

      if (sortedCalls.length === 0) continue;

      const key = `${customerId}-${date}`;
      if (processedEntries.has(key)) {
        continue;
      }

      const { maxConcurrentCalls, peakTimestamp, callIds } =
        trackConcurrentCalls(sortedCalls);

      results.push({
        customerId: parseInt(customerId, 10),
        date,
        maxConcurrentCalls,
        timestamp: peakTimestamp,
        callIds,
      });

      processedEntries.add(key);
    }
  }

  return results;
};

module.exports = { generateCallConcurrencyResults };

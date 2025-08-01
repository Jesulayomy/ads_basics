const { splitCallIntoDays } = require("./splitCallIntoDays");
const { formatDate } = require("./formatDate");

const groupByCustomerAndDate = (calls) => {
  return calls.reduce((grouped, call) => {
    const customerId = call.customerId;

    const virtualCalls = splitCallIntoDays(
      call.startTimestamp,
      call.endTimestamp
    );

    virtualCalls.forEach(({ dayStart, dayEnd }) => {
      const date = formatDate(dayStart);

      if (!grouped[customerId]) {
        grouped[customerId] = {};
      }

      if (!grouped[customerId][date]) {
        grouped[customerId][date] = [];
      }

      grouped[customerId][date].push({
        ...call,
        startTimestamp: dayStart,
        endTimestamp: dayEnd,
      });
    });

    return grouped;
  }, {});
};

module.exports = { groupByCustomerAndDate };

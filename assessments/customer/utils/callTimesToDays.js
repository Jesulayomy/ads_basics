import timestampToDate from "./timestampToDate.js";

function callTimesToDays(startTimestamp, endTimestamp) {
  const calls = [];
  let startDay = startTimestamp;

  while (startDay < endTimestamp) {
    const endDay = new Date(startDay).setHours(23, 59, 59, 999);

    calls.push({
      startTimestamp: startDay,
      endTimestamp: Math.min(endTimestamp, endDay),
      date: timestampToDate(startDay)
    })

    startDay = endDay + 1;
  }

  return calls;
}

export default callTimesToDays;

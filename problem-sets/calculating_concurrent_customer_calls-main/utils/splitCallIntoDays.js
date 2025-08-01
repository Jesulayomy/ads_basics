const MS_PER_DAY = 24 * 60 * 60 * 1000;

const splitCallIntoDays = (startTimestamp, endTimestamp) => {
  const calls = [];

  let currentDayStart = startTimestamp;
  
  while (currentDayStart < endTimestamp) {
    let currentDayEnd = new Date(currentDayStart).setUTCHours(23, 59, 59, 999);

    calls.push({
      dayStart: currentDayStart,
      dayEnd: Math.min(currentDayEnd, endTimestamp),
      day: new Date(currentDayStart).toISOString().split('T')[0],
    });

    currentDayStart = currentDayEnd + 1;
  }

  return calls;
};


module.exports = { splitCallIntoDays };

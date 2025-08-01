const { groupByCustomerAndDate } = require("./utils/groupByCustomerAndDate");
const { splitCallIntoDays } = require("./utils/splitCallIntoDays");
const { generateCallConcurrencyResults } = require("./utils/generateCallConcurrencyResults");

const testInput = {
  callRecords: [
    {
      customerId: 123,
      callId: "Jan1st_11:30pm_to_Jan1st_11:40pm_Call",
      startTimestamp: 1704151800000,
      endTimestamp: 1704152400000,
    },
    {
      customerId: 123,
      callId: "Jan2nd_11:50pm_to_Jan3rd_12:20am_Call",
      startTimestamp: 1704239400000,
      endTimestamp: 1704241200000,
    },
    {
      customerId: 123,
      callId: "Jan3rd_12:10am_to_Jan3rd_1:00am_Call",
      startTimestamp: 1704240600000,
      endTimestamp: 1704243600000,
    },
    {
      customerId: 123,
      callId: "Jan4th_11:00pm_to_Jan5th_12:00am_Call",
      startTimestamp: 1704409200000,
      endTimestamp: 1704412800000,
    },
  ],
};

// const expectedOutput = {
//   results: [
//     {
//       customerId: 123,
//       date: "2024-01-01",
//       maxConcurrentCalls: 1,
//       callIds: ["Jan1st_11:30pm_to_Jan1st_11:40pm_Call"],
//       timestamp: 1704151800000,
//     },
//     {
//       customerId: 123,
//       date: "2024-01-02",
//       maxConcurrentCalls: 1,
//       callIds: ["Jan2nd_11:50pm_to_Jan3rd_12:20am_Call"],
//       timestamp: 1704239400000,
//     },
//     {
//       customerId: 123,
//       date: "2024-01-03",
//       maxConcurrentCalls: 2,
//       callIds: [
//         "Jan2nd_11:50pm_to_Jan3rd_12:20am_Call",
//         "Jan3rd_12:10am_to_Jan3rd_1:00am_Call",
//       ],
//       timestamp: 1704240600000,
//     },
//     {
//       customerId: 123,
//       date: "2024-01-04",
//       maxConcurrentCalls: 1,
//       callIds: ["Jan4th_11:00pm_to_Jan5th_12:00am_Call"],
//       timestamp: 1704409200000,
//     },
//   ],
// };
const expectedOutput = {
  "results": [
    {
      "customerId": 123,
      "date": "2024-01-01",
      "maxConcurrentCalls": 1,
      "timestamp": 1704151800000,
      "callIds": [
        "Jan1st_11:30pm_to_Jan1st_11:40pm_Call"
      ]
    },
    {
      "customerId": 123,
      "date": "2024-01-02",
      "maxConcurrentCalls": 1,
      "timestamp": 1704239400000,
      "callIds": [
        "Jan2nd_11:50pm_to_Jan3rd_12:20am_Call"
      ]
    },
    {
      "customerId": 123,
      "date": "2024-01-03",
      "maxConcurrentCalls": 2,
      "timestamp": 1704240600000,
      "callIds": [
        "Jan2nd_11:50pm_to_Jan3rd_12:20am_Call",
        "Jan3rd_12:10am_to_Jan3rd_1:00am_Call"
      ]
    },
    {
      "customerId": 123,
      "date": "2024-01-04",
      "maxConcurrentCalls": 1,
      "timestamp": 1704409200000,
      "callIds": [
        "Jan4th_11:00pm_to_Jan5th_12:00am_Call"
      ]
    }
  ]
}

const groupedData = groupByCustomerAndDate(testInput.callRecords);
console.log("Grouped data:", JSON.stringify(groupedData, null, 2));

const results = generateCallConcurrencyResults(groupedData);

console.log("Actual output:", JSON.stringify({ results }, null, 2));

const isTestPassing =
  JSON.stringify(results ) === JSON.stringify(expectedOutput);
console.log("Test passing:", isTestPassing);

console.log("Split calls 1:", splitCallIntoDays(1704239400000, 1704241200000));

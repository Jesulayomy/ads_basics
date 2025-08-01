const http = require("http");
const { groupByCustomerAndDate } = require("./utils/groupByCustomerAndDate");
const { generateCallConcurrencyResults } = require("./utils/generateCallConcurrencyResults");

const options = {
  hostname: "candidate.hubteam.com",
  path: "/candidateTest/v3/problem/dataset?userKey=71baa62a2268b783d30dbc7b1b4f",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const postOptions = {
  hostname: "candidate.hubteam.com",
  path: "/candidateTest/v3/problem/result?userKey=71baa62a2268b783d30dbc7b1b4f",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const makeRequest = (options, postData = null, callback) => {
  const request = http.request(options, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => callback(null, data));
  });

  request.on("error", (error) => callback(error, null));

  if (postData) {
    request.write(postData);
  }

  request.end();
};

const postResults = (results) => {
  const postData = JSON.stringify({
    results: results.map((result) => ({
      customerId: result.customerId,
      date: result.date,
      maxConcurrentCalls: result.maxConcurrentCalls,
      callIds: result.callIds,
      timestamp: result.timestamp,
    })),
  });

  makeRequest(postOptions, postData, (error, data) => {
    if (error) {
      console.error("Error with POST:", error);
    } else {
      console.log("POST response:", data);
    }
  });
};

const getPosts = () => {
  makeRequest(options, null, (error, data) => {
    if (error) {
      console.error("Error with GET:", error);
    } else {
      const jsonData = JSON.parse(data);
      const callsArray = jsonData.callRecords;
      const groupedData = groupByCustomerAndDate(callsArray);
      const results = generateCallConcurrencyResults(groupedData);
      postResults(results);
    }
  });
};

getPosts();

// const CALL_RECORDS = require("./data/records").callRecords;
import groupByCustomerAndDate from "./utils/groupByCustomerAndDate.js";
import generateConcurrentCalls from "./utils/generateConcurrentCalls.js";

const userKey = "71baa62a2268b783d30dbc7b1b4f"; // This would be an env or imported from somewhere in practice
const getURL = `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${userKey}`;
const postURL = `https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${userKey}`;

async function getCallRecords(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
const CALL_RECORDS = await getCallRecords(getURL);

const groupedByCustomerAndDate = groupByCustomerAndDate(CALL_RECORDS.callRecords);
const billingData = generateConcurrentCalls(groupedByCustomerAndDate);


const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    results: billingData
  })
};

async function postBillingData(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const FINAL_RESPONSE = await postBillingData(postURL);
console.log(FINAL_RESPONSE);

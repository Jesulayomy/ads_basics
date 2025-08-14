import groupByCustomerAndDate from "./utils/groupByCustomerAndDate.js";
import getConcurrencyResults from "./utils/getConcurrencyResults.js";

const userKey = "71baa62a2268b783d30dbc7b1b4f";
const getURL = `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${userKey}`;
const getResponse = await fetch(getURL);
const records = await getResponse.json();

const groupedByCustomerAndDate = groupByCustomerAndDate(records.callRecords);
const billingData = getConcurrencyResults(groupedByCustomerAndDate);
console.log(billingData);

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    results: billingData
  })
};

const postURL = `https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${userKey}`;
const postResponse = await fetch(postURL, options);
const finalResult = await postResponse.json();
console.log(finalResult);

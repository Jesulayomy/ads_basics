# Concurrent Customer Calls Application - Detailed Explanation

## Overview

This application is designed to analyze customer call records and calculate the maximum number of concurrent calls for each customer on each day. It processes call data with timestamps and determines peak concurrency periods.

## Application Architecture

### Main Entry Point: `api.js`

The application starts at `api.js`, which serves as the main orchestrator:

#### Key Components

1. **Data Source Configuration**
   - Uses a hardcoded user key for API authentication
   - Can fetch data from external API or use local data
   - Currently uses local `CALLRECORDS` from `./data/records.js`

2. **Core Functions in api.js:**
   - `getCallRecords(url)`: Fetches call records from external API
   - `sortRecordsByTimestamp(callRecords)`: Sorts records chronologically
   - `groupCustomersById(callRecords)`: Groups calls by customer ID

#### Current State

- The application is partially implemented
- Basic data loading and customer grouping is functional
- Main processing logic is commented out and incomplete

## Data Structure

### Call Record Format

```javascript
{
  customerId: 47260,
  callId: "185e4202-191d-4938-9776-48bf4f31aff8",
  startTimestamp: 1704532680000,
  endTimestamp: 1704534360000
}
```

### Expected Output Format

```javascript
{
  "results": [
    {
      "customerId": 123,
      "date": "2024-01-01",
      "maxConcurrentCalls": 1,
      "timestamp": 1704151800000,
      "callIds": ["call_id_1", "call_id_2"]
    }
  ]
}
```

## Complete Implementation Flow

### 1. Data Processing Pipeline

#### Step 1: Group by Customer and Date (`groupByCustomerAndDate.js`)

- **Purpose**: Organizes calls by customer ID and date
- **Process**:
  - Takes raw call records
  - Splits calls that span multiple days using `splitCallIntoDays`
  - Groups calls by customer ID and date
  - Returns structured data: `{customerId: {date: [calls]}}`

#### Step 2: Split Calls Into Days (`splitCallIntoDays.js`)

- **Purpose**: Handles calls that span multiple calendar days
- **Process**:
  - Takes start and end timestamps
  - Breaks calls into daily segments
  - Returns array of daily call segments with day boundaries

#### Step 3: Generate Concurrency Results (`generateCallConcurrencyResults.js`)

- **Purpose**: Calculates maximum concurrent calls for each customer-date combination
- **Process**:
  - Iterates through grouped data
  - Sorts calls by start timestamp
  - Tracks concurrent calls using `trackConcurrentCalls`
  - Returns final results array

### 2. Concurrency Tracking Algorithm

#### Core Algorithm (`trackConcurrentCalls.js`)

- **Purpose**: Determines maximum concurrent calls and peak timestamps
- **Process**:
  - Maintains active calls array
  - Updates active calls for each new call
  - Tracks maximum concurrency and peak timestamps
  - Returns peak concurrency data

#### Active Calls Management (`updateActiveCalls.js`)

- **Purpose**: Manages currently active calls
- **Process**:
  - Removes calls that have ended before new call starts
  - Adds new call to active calls
  - Returns updated active calls array

### 3. Utility Functions

#### Date Formatting (`formatDate.js`)

- **Purpose**: Converts timestamps to ISO date format (YYYY-MM-DD)
- **Process**: Uses UTC date methods for consistent formatting

#### Sorting (`sortCallsByStartTimestamp.js`)

- **Purpose**: Sorts calls chronologically by start time
- **Process**: Simple array sort by startTimestamp

## Application Flow Diagram

```
Raw Call Records
       ↓
[api.js] Load & Sort Data
       ↓
[groupByCustomerAndDate.js] Group by Customer & Date
       ↓
[splitCallIntoDays.js] Split Multi-Day Calls
       ↓
[generateCallConcurrencyResults.js] Process Each Customer-Date
       ↓
[trackConcurrentCalls.js] Calculate Concurrency
       ↓
[updateActiveCalls.js] Manage Active Calls
       ↓
Final Results Array
```

## Key Algorithms

### 1. Concurrency Tracking Algorithm

```javascript
// For each call in chronological order:
// 1. Remove calls that have ended
// 2. Add new call to active calls
// 3. Track maximum concurrency
// 4. Record peak timestamps
```

### 2. Multi-Day Call Splitting

```javascript
// For calls spanning multiple days:
// 1. Calculate day boundaries
// 2. Create separate call segments for each day
// 3. Maintain original call metadata
```

## Current Implementation Status

### ✅ Completed

- Basic data loading and sorting
- Customer grouping functionality
- Complete utility functions (in separate directory)
- Test framework with expected outputs

### ❌ Incomplete

- Main processing pipeline in `api.js`
- Integration of utility functions
- Final result generation
- API endpoint implementation

## Testing Framework

### Test File: `test.js`

- Contains sample input data
- Defines expected output format
- Tests core functionality
- Validates results against expected output

### Test Data

- Sample calls spanning multiple days
- Overlapping calls for concurrency testing
- Edge cases for date boundaries

## Performance Considerations

### Time Complexity

- **Sorting**: O(n log n) for call sorting
- **Concurrency Tracking**: O(n) for single customer-date
- **Overall**: O(n log n) where n is total number of calls

### Space Complexity

- **Active Calls**: O(k) where k is max concurrent calls
- **Grouped Data**: O(n) for storing all calls
- **Results**: O(m) where m is customer-date combinations

## Future Enhancements

### Potential Improvements

1. **API Integration**: Complete external API fetching
2. **Error Handling**: Add robust error handling
3. **Performance**: Optimize for large datasets
4. **Caching**: Implement result caching
5. **Real-time Processing**: Stream processing for live data

## Usage Instructions

### Running the Application

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run main application
node api.js
```

### Expected Output

The application should produce a JSON object with results containing:

- Customer ID
- Date (YYYY-MM-DD format)
- Maximum concurrent calls
- Timestamp of peak concurrency
- Array of call IDs involved in peak

This application demonstrates efficient algorithms for processing time-series data and calculating concurrent events, making it suitable for call center analytics and similar use cases.

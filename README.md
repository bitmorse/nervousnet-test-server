# nervousnet-test-server
Accepts POST requests and stores them. To get stored data, send a GET request. Requires node.

## Installation

1. Clone this repository and `cd` to it.
2. Run `npm install`.
3. Run `npm start` to start the server.

## Usage

- Any JSON that is sent to `http://localhost:3000` via __POST__ will be stored:
  - `curl -X POST  -H "Content-Type:application/json" -d '{"foo":"bar"}'`
- Retrieve all data with a single GET request to:
  - `http://localhost:3000`
- Data is persisted to disk in `db.json`.
- Extend the server for more functionality by looking at the [NDDB docs](https://github.com/nodeGame/NDDB).
- Watch the [mini screencast](http://cl.ly/2R0X3E2i0P1T).

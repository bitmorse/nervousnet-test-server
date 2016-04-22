# nervousnet-test-server
Accepts POST requests and stores them. To get stored data, send a GET request. __[Requires node 5.5+](https://nodejs.org/en/download/package-manager).__

## Installation

1. Clone this repository and `cd` to it.
2. Run `npm install`.
3. Run `PORT=3000 npm start` to start the server.

## Usage

- Any JSON that is sent to `http://localhost:3000` via __POST__ will be stored:
  - `curl -X POST  -H "Content-Type:application/json" -d '{"foo":"bar"}'`
- Retrieve all data with a single GET request to:
  - `http://localhost:3000`
- Data is persisted to disk in `db.json`.
- Extend the server for more functionality by looking at the [NDDB docs](https://github.com/nodeGame/NDDB).
- Watch the [mini screencast](http://cl.ly/2R0X3E2i0P1T).


## Running on remote server for testing purposes
- You can use c9.io for this (free), make sure to run below commands to get latest version of node on c9:
- `nvm install 5.5.0`
- `nvm use 5.5.0`
- `nvm alias default v5.5.0`

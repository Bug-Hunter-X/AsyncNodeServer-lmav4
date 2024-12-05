# Unresponsive Node.js Server: A Case Study

This repository demonstrates a common issue in Node.js applications: an unresponsive server caused by a long-running synchronous operation within the request handler.  The synchronous loop simulates a computationally intensive task that blocks the event loop, preventing the server from processing new requests.

## Bug Description

The provided `bug.js` file contains a simple HTTP server.  However, its request handler includes a `while` loop that iterates a billion times. This long-running, synchronous operation completely blocks the Node.js event loop. Consequently, the server becomes unresponsive to incoming requests, even simple ones.

## Solution

The `bugSolution.js` file provides a solution by using asynchronous operations and breaking down the long task into smaller chunks using `process.nextTick`. This approach prevents blocking the event loop and ensures the server remains responsive.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using `node bug.js`. Try accessing `http://localhost:3000/` in your browser. The server will not respond or take extremely long to respond.
3.  Now run `bugSolution.js` using `node bugSolution.js`. The server will remain responsive, and you can visit `http://localhost:3000/` without any noticeable delays.
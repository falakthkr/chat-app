"use strict";

const http = require("http");
const WebSocket = require("ws");

async function startWebSocketServer() {
  // Create an HTTP server to use with WebSocket
  const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("WebSocket server is running");
  });

  // Initialize WebSocket server
  const wss = new WebSocket.Server({ server });

  // Handle WebSocket connections
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      // Echo the message back to the client
      ws.send(message);
    });

    // Send a welcome message when a client connects
    ws.send("Welcome to the chat server!");
  });

  // Start the WebSocket server on port 1338
  server.listen(1338, () => {
    console.log("WebSocket server is running on port 1338");
  });
}

// Start the WebSocket server
startWebSocketServer();

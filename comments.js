// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.

// Import the http module.
const http = require('http');

// Import the fs module.
const fs = require('fs');

// Create a server object.
const server = http.createServer((req, res) => {
  // Read the content of the comments.html file.
  fs.readFile('./comments.html', (err, data) => {
    // Return an error if the file cannot be read.
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('<h1>404 Not Found</h1>');
      return res.end();
    }
    // Return the content of the comments.html file.
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

// Make the server listen on port 3000.
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// The server is running on http://localhost:3000.
// When you go to this URL, the comments.html file is served.
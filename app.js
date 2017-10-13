const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', (err) => {
      console.err(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // or response.writeHead(200, {'Content-Type', 'application/json'});

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();

  });
}).listen(3000, () => {
  console.log('Server running on 3000...');
});


function getMessage(date, username) {
  const hour = date.getHours();

  let greeting = '';
  if (hour >= 5 && hour < 12) {
    greeting = 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon';
  } else if (hour >= 18 && hour < 23) {
    greeting = 'Good evening';
  } else {
    greeting = 'Good night';
  }

return `${greeting}, ${username}`;
}

const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
const currentUser = os.userInfo().username;
const now = new Date();

const greetingMessage = getMessage(now, currentUser);

const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Greeting Page</title>
      </head>
      <body>
        <p>Date of request: ${now}</p>
        <p>${greetingMessage}</p>
      </body>
    </html>
  `;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlContent);
});

const port = 8001;
server.listen(port);

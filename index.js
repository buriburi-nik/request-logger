const express = require('express');
const app = express();
const PORT = 3000;

const requestLogger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const ip = req.ip;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} request to ${url} from ${ip}`);
  next(); 
};

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello from root');
  console.log('yo');
});

app.get('/about', (req, res) => {
  res.send('hello from about ');
  console.log('yo from about');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

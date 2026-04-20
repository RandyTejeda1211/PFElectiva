const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo');

  res.send(`
    <html>
      <head>
        <title>Mi App</title>
        <style>
          body {
            background: #113079;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial;
          }

          h1 {
            color: #38bdf8;
            font-size: 3rem;
          }
        </style>
      </head>
      <body>
        <h1>Segundo cambio de prueba</h1>
      </body>
    </html>
  `);
});

module.exports = app;

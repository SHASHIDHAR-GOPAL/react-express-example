const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/links', (req, res) => {
  res.send([{name: 'Adobe', owner: 'Nick', URL: 'adobe', path_URL: 'https://adobe.com'},
    {name: 'Nat Geo - Twitter', owner: 'Ken', URL: 'natgeo-twitter', path_URL: 'https://twitter.com/NatGeo'},
  ]);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require('express');

const app = express();

app.get('/api/sample_data', (req, res) => {
  const sample_data = [
    {key: 1, value: 'one'},
    {key: 2, value: 'two'},
    {key: 3, value: 'three'},
  ];

  res.json(sample_data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`); 
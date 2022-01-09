const express = require('express');

const app = express();

app.use(express.json());

const empRoutes = require('./routes/empRoutes');

// importing all the routes
app.use('/api/v1', empRoutes);

app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});

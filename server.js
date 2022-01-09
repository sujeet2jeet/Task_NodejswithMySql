const express = require('express');

const app = express();

app.use(express.json());

// Unhandled Uncaught Exception
process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error : --', err);
  process.exit(1); //mandatory (as per the Node.js docs)
});

const empRoutes = require('./routes/empRoutes');

// importing all the routes
app.use('/api/v1', empRoutes);

app.listen(5000, () => {
  console.log(`server is running on port 5000`);
});

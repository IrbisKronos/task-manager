import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

// Routes
import authRouter from './routers/authRoute.js';

const app = express(); //app initialization
const port = 3000;

// middleware
app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(port, () => {
  console.log(
    `Server listening on port ${port} and starting at http://localhost:${port}`
  );
});

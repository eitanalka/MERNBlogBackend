import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import getDbConnectionString from './../config'

import routes from './routes';

mongoose.connect(getDbConnectionString(), () => {
  console.log('Connected to mongodb...')
});

const app = express();

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

export default app;

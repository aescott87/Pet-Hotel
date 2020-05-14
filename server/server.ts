import express from 'express';
import bodyParser from 'body-parser';
import ownersRouter from './routes/owners.router';
import petsRouter from './routes/pets.router';
import checkInRouter from './routes/checkIn.router'

const app: express.Application = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/api/pets', petsRouter);
app.use('/api/owners', ownersRouter);
app.use('/api/checkIn', checkInRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT: number | string = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, (): void => {
  console.log(`So awesome. Much wow. Listening on port: ${PORT}`);
});

export default app;

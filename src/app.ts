import express from 'express';
import bodyParser from 'body-parser';
import videoRoutes from './routes/videoRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/hometask_01/api/videos', videoRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

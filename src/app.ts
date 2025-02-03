import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Импортируйте cors
import videoRoutes from './routes/videoRoutes';

const app = express();

// Разрешение CORS для всех доменов
app.use(cors());

app.use(bodyParser.json());

// Подключение маршрутов
app.use('/hometask_01/api/videos', videoRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

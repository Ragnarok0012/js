import { Request, Response } from 'express';

// Моковые данные видео
let videos = [
    { id: 1, title: 'Algorithms', author: 'John Doe', availableResolutions: ['P144'], createdAt: new Date().toISOString() },
    { id: 2, title: 'SQL', author: 'Jane Smith', availableResolutions: ['P720'], createdAt: new Date().toISOString() },
];

// Разрешенные значения для качества видео
const validResolutions = ["P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"];

// Валидация разрешений качества
const validateResolutions = (resolutions: string[]): boolean => {
    return resolutions.every(res => validResolutions.includes(res));
};

// Получить все видео
export const getAllVideos = (req: Request, res: Response) => {
    res.status(200).json(videos);
};

// Создать новое видео
export const createVideo = (req: Request, res: Response) => {
    const { title, author, availableResolutions } = req.body;

    // Валидация входных данных
    if (!title || !author || !availableResolutions || !validateResolutions(availableResolutions)) {
        return res.status(400).send({ errorsMessages: [{ message: 'Invalid input values', field: 'availableResolutions' }] });
    }

    const newVideo = {
        id: videos.length + 1,
        title,
        author,
        availableResolutions,
        createdAt: new Date().toISOString(),
    };

    videos.push(newVideo);
    res.status(201).json(newVideo);
};

// Получить видео по ID
export const getVideoById = (req: Request, res: Response) => {
    const video = videos.find(v => v.id === parseInt(req.params.id));
    if (!video) return res.status(404).send('Video not found');
    res.status(200).json(video);
};

// Обновить видео по ID
export const updateVideo = (req: Request, res: Response) => {
    const video = videos.find(v => v.id === parseInt(req.params.id));
    if (!video) return res.status(404).send('Video not found');

    const { title, author, availableResolutions } = req.body;

    // Валидация разрешений качества
    if (!availableResolutions || !validateResolutions(availableResolutions)) {
        return res.status(400).send({ errorsMessages: [{ message: 'Invalid resolution value', field: 'availableResolutions' }] });
    }

    video.title = title;
    video.author = author;
    video.availableResolutions = availableResolutions;

    res.status(204).send();
};

// Удалить видео по ID
export const deleteVideo = (req: Request, res: Response) => {
    const videoIndex = videos.findIndex(v => v.id === parseInt(req.params.id));
    if (videoIndex === -1) return res.status(404).send('Video not found');
    videos.splice(videoIndex, 1);
    res.status(204).send();
};

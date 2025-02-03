import { Router } from 'express';
import {
    getAllVideos,
    createVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
} from '../controllers/videoController';

const router = Router();

// Маршруты для видео
router.get('/', getAllVideos);         // GET /api/videos
router.post('/', createVideo);         // POST /api/videos
router.get('/:id', getVideoById);     // GET /api/videos/:id
router.put('/:id', updateVideo);      // PUT /api/videos/:id
router.delete('/:id', deleteVideo);   // DELETE /api/videos/:id

export default router;

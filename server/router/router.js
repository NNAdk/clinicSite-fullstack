import { Router } from 'express';

import * as appointmentController from '../controllers/appointmentController.js';

const router = new Router();

router.post('/appointment', appointmentController.createRecordController);

router.get('/appointment', appointmentController.getRecordsController);

export default router;
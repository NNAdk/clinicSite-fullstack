import { Router } from "express";
import { login, register, reserve } from '../controllers/userController.js'


const router = Router ();

router.post('/register', register );
router.post('/login', login);
router.post('/reserve', reserve);


// router.get('/') -------> получить инфу о записях + !!!сделать страницу записей


export default router;
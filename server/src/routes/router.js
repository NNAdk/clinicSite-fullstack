import { Router } from "express";
import { register } from '../controllers/userController.js'


const router = Router ();

router.post('/register', register );
router.post('/login', (req, res) => res.send("login route"));
router.post('/reserve', (req, res) => res.send("reserve route"));


// router.get('/') -------> получить инфу о записях + !!!сделать страницу записей


export default router;
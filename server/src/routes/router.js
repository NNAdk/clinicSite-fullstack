import { Router } from "express";

const router = new Router;

router.post('/register');
router.post('/login');
router.post('/reserve');


// router.get('/') -------> получить инфу о записях + !!!сделать страницу записей


export default router;
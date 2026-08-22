// website/routes.js
import { Router } from 'express';
import * as api from './apis.js';
import * as controller from './controllers.js';
import { redirectIfAuthenticated, requireAuth } from '../configs/middlewares.js'; 

const router = Router();

router.get('/', controller.home);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/players', controller.players);
router.get('/sign-in', controller.signIn);
router.post('/sign-in', redirectIfAuthenticated, controller.login);
router.get('/sign-out', requireAuth, controller.logout);
router.get('/api/v1/sessions', api.sessionInfo);
router.get('/api/v1/nations', api.listNations);
router.get('/api/v1/nations/:id', api.getNationById);
router.post('/api/v1/nations', api.createNation);
router.put('/api/v1/nations/:id', api.updateNation);
router.delete('/api/v1/nations/:id', api.deleteNation);

export default router;
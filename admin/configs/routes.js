// admin/configs/routes.js
import { Router } from 'express';
import * as admins from '../controllers/admin_controllers.js';
import { redirectIfAuthenticated, requireAuth } from '../../configs/middlewares.js'; 

const router = Router();

router.get('/admin', requireAuth, admins.home);

export default router;
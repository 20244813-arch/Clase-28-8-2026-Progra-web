// website/routes.js
import { Router } from 'express';
import * as api from './apis.js';

const router = Router();

router.get('/', (req, res) => {
  return res.render('website/index');
});
router.get('/api/v1/nations', api.listNations);
router.get('/api/v1/nations/:id', api.getNationById);
router.post('/api/v1/nations', api.createNation);
router.put('/api/v1/nations/:id', api.updateNation);
router.delete('/api/v1/nations/:id', api.deleteNation);

export default router;
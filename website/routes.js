// website/routes.js
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Acerca de???');
});

export default router;
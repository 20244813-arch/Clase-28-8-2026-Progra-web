// website/routes.js
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.render('website/index');
});

export default router;
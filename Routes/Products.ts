import { Router } from 'express';
import ProductsController from '../Controllers/Products';

const router = Router();

router.post('/', ProductsController.create);
router.get('/', ProductsController.getAll);

export default router;
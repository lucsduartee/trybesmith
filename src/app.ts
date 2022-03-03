import express from 'express';
import authMiddleware from '../Middlewares/authMiddleware';
import router from '../Routes/User';
import routerL from '../Routes/Login';
import routerP from '../Routes/Products';

const app = express();

app.use(express.json());

app.use('/users', router);
app.use('/login', routerL);

app.use(authMiddleware);
app.use('/products', routerP);

export default app;

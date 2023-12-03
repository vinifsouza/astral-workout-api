import router from './presentation/routers';
import express from 'express';

const app = express();
app.use(express.json());
app.use('/', router);

export default app;

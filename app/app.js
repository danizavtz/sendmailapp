import path from 'path';
import express from 'express';
import contactController from './controllers/contact-controller.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/', contactController.index);
app.post('/', contactController.sendMail);

export default app;

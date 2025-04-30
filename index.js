import express from 'express'
import dotenv from 'dotenv'
import './src/database/db.js'
import router from './src/routes/routes.js';


const app = express();

app.use(express.json());

 app.use(router);

 app.listen(8080);

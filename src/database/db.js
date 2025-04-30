import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(process.env.LINKMONGO, {

  dbName: "ralph"
})
.then(() => console.log("banco rodando"))
.catch((error) => console.log("deu erro: "+error));



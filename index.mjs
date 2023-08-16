import express from "express";
import authRoutes from "./Routes/authRoutes.mjs";
import profileRoutes from "./Routes/profileRoutes.mjs";

const app = express();

const port = 8000;

app.use(express.json());

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})
import express, { urlencoded } from "express"
import mongoose from "mongoose";
import { router } from "./routes/post.route.js";

const postRouter = router;

const PORT = process.env.PORT;
const DB_PASSWORD = process.env.DB_PASSWORD;
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}


// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(logger);


//routes 
app.use("/posts", postRouter);



mongoose.connect(`mongodb+srv://ajibewadannyboi:${DB_PASSWORD}@danielcluster.fd5sg.mongodb.net/blog-api?retryWrites=true&w=majority&appName=danielcluster`)
.then(() => {
    console.log("Connected to the Database");
    app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
}).catch((error) => {
    console.log(`Connection failed: ${error}`)
});
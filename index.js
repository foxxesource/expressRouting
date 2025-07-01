import express from 'express';
// import helloRouter from './hello.js'
import postRouter from './routers/post.js'
// import commentRouter from './routers/comment.js'
import cors from "cors";

const app = express();

app.use(cors())


app.use('/posts', postRouter)

app.listen(3000, () => {
    console.log(`app runing on https://localhost:3000`)
});
import { Router } from "express";
import commentRouter from './comment.js'

const router = Router();

const posts = [
    { id: 1, title: 'first post', content: 'this is my first post' },
    { id: 2, title: 'second post', content: 'this is my second post' },
    { id: 3, title: 'third post', content: 'this is my third post' },
    { id: 4, title: 'fourth post', content: 'this is my fourth post' },
]

router.get('/:postId', (req, res) => {
    const results = posts.filter((item, idx) => {
        return Number(req.params.postId) === item.id
    })
    res.json(results)
})

router.use('/:postId/comments', commentRouter)


router.get('/', (req, res) => {
    res.json(posts)
})
export default router
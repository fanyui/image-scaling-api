import { Router } from 'express'
import { ResizeRouter } from './routes/resize.router'

const router: Router = Router()
router.use('/', ResizeRouter)

// router.get('/test', async (req: Request, res: Response) => {
//     res.send(`V0`);
// });

export const IndexRouter: Router = router

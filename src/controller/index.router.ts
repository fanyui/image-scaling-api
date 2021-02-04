import { Router, Request, Response } from 'express';
import { ResizeRouter } from './routes/resize.router';

const router: Router = Router();
// router.get('/', (req: Request, res: Response)=>{
//     const body = {
//         request: "try GET /image=imageName&&width=100&&height=100 where image name is one of the following",
//         imageName: ["encenadaport","fjord","icelandwaterfall","palmtunnel","santamonica"]
//     }
//     res.send(body)
// })
router.use('/', ResizeRouter);

// router.get('/test', async (req: Request, res: Response) => {    
//     res.send(`V0`);
// });

export const IndexRouter: Router = router;
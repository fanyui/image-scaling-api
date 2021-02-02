import { Router, Request, Response } from 'express';
const router: Router = Router();
router.get('/', async (req: Request, res: Response) => {
        const items = "testing"
    res.send(items);
});

export const ResizeRouter: Router = router;
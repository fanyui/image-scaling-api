import { Router, Request, Response } from 'express';
import {filterImageFromURL, deleteLocalFiles,} from '../../util/util';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    let width = 100
    let height = 100
    const path =` ${__dirname}/../../images/full/`
    console.log(path)
//       if(req.query.width){
//           width = parseInt(req.query.width)
//       }
//       if(req.query.height){
//           height = parseInt(req.query.height)
//       }
    //const file = await readLocalFile('../../../images/full/fjord.jpg')
    const resize = filterImageFromURL("../../../images/full/fjord.jpg", 200, 200)

    res.send(resize);
});

export const ResizeRouter: Router = router;
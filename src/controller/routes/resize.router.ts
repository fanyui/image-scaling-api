import { Router, Request, Response } from 'express';
import {filterImageFromURL,} from '../../util/util';
const path = require('path');

const router: Router = Router();
router.get('/', async (req: Request, res: Response) => {
    let width = 100
    let height = 100
    let imageName;
    const images = ["encenadaport","fjord","icelandwaterfall","palmtunnel","santamonica"]
      if(req.query.width){
          width = +req.query.width
      }
      if(req.query.height){
          height = +req.query.height
      }
      
      if(req.query.image){
          imageName = req.query.image

      }
      
      if(!images.includes(imageName)){
        const body = {
            request: "try GET /?image=imageName&&width=100&&height=100 where image name is one of the following",
            imageName: ["encenadaport","fjord","icelandwaterfall","palmtunnel","santamonica"]
        }
        return res.send(body)
      }
    const file = await filterImageFromURL(imageName, width, height)

    return res.sendFile(path.resolve(file), (e)=>{
       console.log("errors occure", e)
      });
});

export const ResizeRouter: Router = router;
import fs from 'fs';
import { resolve } from 'path';
const sharp = require('sharp');
// const imageName="fjord"
// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(imageName: string, width: Number, height: Number ): Promise<string>{
  const outpath = `/../../images/thumbnail/${imageName}${width}x${width}.jpg`;
    if (fs.existsSync(__dirname+outpath)) {
      resolve(__dirname+outpath)
    }
    else{
      fs.mkdirSync(__dirname+"/../../images/thumbnail");
    }
    return new Promise( async resolve => {
        //@ts-ignore
        await sharp(`${__dirname}/full/${imageName}.jpg`)
          .rotate()
          .resize(width, height)
          .toFile(__dirname+outpath, ()=>{
            resolve(__dirname+outpath);
        });
    });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        fs.unlinkSync(file);
    }
}

            
// export async function readLocalFile(filename){
//    const file = await fs.readFile(filename)
//    return file
// }
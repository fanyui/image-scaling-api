import fs from 'fs';
const sharp = require('sharp');

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string, width: Number, height: Number ): Promise<string>{
    return new Promise( async resolve => {
      const outpath = '../images/resize.'+Math.floor(Math.random() * 2000)+'.jpg';

        //strong type checking with jimp fails during generating build. so am ignoring it here.
        //@ts-ignore
        await sharp('input.jpg')
          .rotate()
          .resize(width, height)
          .toBuffer()
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
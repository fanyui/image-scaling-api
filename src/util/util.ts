import fs from 'fs'
import { resolve } from 'path'
// import * as sharp from 'sharp'
import sharp from 'sharp'
import path from 'path'
// const imageName="fjord"
// filterImageFromURL
// helper function to resized, filter, and save the filtered image locally based on width and height
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
async function filterImageFromURL(
    imageName: string,
    width: number,
    height: number
): Promise<string> {
    const outpath = `/../../images/thumbnail/${imageName}${width}x${width}.jpg`
    if (fs.existsSync(__dirname + outpath)) {
        resolve(__dirname + outpath)
    }
    // else{
    //   fs.mkdirSync(__dirname+"/../../images/thumbnail");
    // }
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        await sharp(`${__dirname}/full/${imageName}.jpg`)
            .rotate()
            .resize(width, height)
            .toFile(__dirname + outpath, () => {
                resolve(path.resolve(__dirname + outpath))
            })
    })
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
async function deleteLocalFiles(files: Array<string>): Promise<boolean> {
    for (const file of files) {
        fs.unlinkSync(file)
    }
    return true
}

// export async function readLocalFile(filename){
//    const file = await fs.readFile(filename)
//    return file
// }

export default {
    deleteLocalFiles,
    filterImageFromURL,
}

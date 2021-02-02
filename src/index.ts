import express, { Router, Request, Response } from 'express';
const app = express()
const port = process.env.PORT || 3000
import { IndexRouter } from './controller/index.router'


app.use('/',IndexRouter)
app.get('/try', (req: Request, res: Response)=>{
    console.log(" I received a request")
    res.send("it worked.")
})
// app.listen(3000 => function(){
//     console.log("app is listenting on port 3000", port)
// })
app.listen(3000, () => {
    console.log('listening on port 3000')
})
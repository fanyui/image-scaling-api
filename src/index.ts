import express from 'express'
const app = express()

import { IndexRouter } from './controller/index.router'
import { ResizeRouter } from './controller/routes/resize.router'
const port = process.env.PORT || 3000

app.use('/', IndexRouter)
app.use('/resize', ResizeRouter)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
export default app

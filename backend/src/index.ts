import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (_, res) => {
  res.send('Hello World.')
})

app.listen(process.env.PORT)

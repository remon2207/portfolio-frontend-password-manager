import 'dotenv/config'

import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/api', (_, res) => {
  res.send('Hello World')
})

app.listen(process.env.PORT)

export const viteNodeApp = app

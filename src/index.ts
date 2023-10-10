import express from 'express'
import routes from './router'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(routes)

app.listen(3000)
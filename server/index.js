// index.js

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import router from './src/routes/coreRoutes.js'

const app = express()

app.use(cors()) 
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(router)
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

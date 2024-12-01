// index.js

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import router from './src/routes/coreRoutes.js'

const app = express()

dotenv.config()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST']
}))

app.use(express.json())
app.use(fileUpload())

app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

import express from 'express'
import dotenv from 'dotenv'
import { connectdb } from './config/db.js'
import userRouter from './route/userRoute.js'

dotenv.config()

const app = express()

const PORT = 8080 || process.env.PORT

app.use(express.json())
app.use('/user', userRouter)
connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port:${PORT}`)
    })
})

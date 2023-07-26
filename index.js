import cors from "cors"
import express from "express"
import kindeClient from "./client.js"


const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "Hello, World"})
})

app.use('/login', kindeClient.login())

app.get('/login', (req, res) => {
    return res.redirect('/')
})

const PORT = process.env.PORT || 3500

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
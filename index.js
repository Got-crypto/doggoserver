import cors from "cors"
import express from "express"

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "Hello, World"})
})

const PORT = process.env.PORT || 3500

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
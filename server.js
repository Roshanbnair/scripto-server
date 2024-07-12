const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user')
const { connectMongoDb } = require('./connection')

const app = express()
const PORT = 3000;

// CORS configuration
const corsOptions = {
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['content-type', 'Authorization']
}
app.use(express.json())
app.use(cors(corsOptions))

// connection
connectMongoDb('mongodb+srv://roshanbn20:scriptoproof@cluster0.n5ekzaq.mongodb.net/scriptoproofapi?retryWrites=true&w=majority&appName=Cluster0')

// routes
app.use("/users", userRouter)

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))

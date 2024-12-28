const express = require('express')
const userRouter = require('./routes/user.routes.js')
const { connectWithMongoDB } = require('./db/db.connect.js')


const port = 3000
const app = express()
const URL = "mongodb://127.0.0.1:27017/user-manager"
connectWithMongoDB(URL);




// Routes
app.get('/', (req, res) => {
    return res.status(200).send('Welcome to Usermanager')
})


// Middleware - 
app.use(express.urlencoded({ extended: false }))


// User routes
app.use('/api/users', userRouter)


// Server
app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port} Successfully`);
})
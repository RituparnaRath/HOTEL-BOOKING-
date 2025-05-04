/*const path = require('path')
const express = require('express')
/*const dbConnect = require('./utils/db.js')
const userRouter = require('./routers/user.router.js')
const eventRouter = require('./routers/event.router.js')
const logger = require('./midllewares/logger.middlewares.js')
const upload = require('./midllewares/fileUpload.middleware.js')

//require('dotenv').config()

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
// app.use(logger)

app.get("/", logger, (req, res)=>{
    res.send("Welcome to Event Portal")
})
app.post("/",upload.single('myImg'), (req, res)=>{
    console.log(req.file)
    res.send("Okay")
})

app.use("/users/",userRouter)
app.use("/events", eventRouter)

app.listen(PORT, function(){
    console.log(`Server started at port ${PORT}`)
    dbConnect();
})*/
const path = require('path')
const express = require('express')
const connectDB = require('./utils/db.js')
const userRouter = require('./routers/user.router.js')
const hotelRouter = require('./routers/hotel.router.js')
const bookingRouter = require('./routers/booking.router.js')
const logger = require('./middlewares/logger.middlewares.js')
const upload = require('./middlewares/fileUpload.middleware.js')

require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app= express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.get("/",logger,(req, res)=>{
    res.send("WELCOME TO HOTEL BOOKING PORTAL")
 })

 app.post("/",upload.single('hotelPictures'), (req, res)=>{
    console.log(req.file)
    res.send("Okay")
})
 
 app.use("/users/",userRouter)
 app.use("/hotel/",hotelRouter)
 app.use("/booking/",bookingRouter)
 
 app.listen(PORT, function(){
     console.log(`Server started at port ${PORT}`)
     //add this
     connectDB();
 })
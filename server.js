const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
dotenv.config()
const app = express()
const cors = require('cors')
app.use(cors())
mongoose.connect(process.env.DB, () => {
    console.log('Connection to mongodb database was successful!🌳')
   
})
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')
app.use(cookieParser())


 app.use(require('./routes/login')) 
 app.use(require('./routes/register')) 
 app.use(require('./routes/spotify')) 



app.listen(PORT, () => console.log(`backend is up port ${PORT} 🚀`))
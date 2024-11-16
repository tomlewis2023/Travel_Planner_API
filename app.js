const express = require('express')
const mongoose = require('mongoose')
const travelData =  require('./models/travel')
const travelRouter = require('./routers/travelRouter')

const app = express()

app.use(express.json())
app.use('/plans',travelRouter)

async function main(){
await mongoose.connect("mongodb+srv://tomlewis2005:Universal2024@cluster0.erl11.mongodb.net/TravelPlanner")
}

main()
.then(()=> console.log("DB connected"))
.catch((err)=> console.log(err))

app.listen(3000, ()=>{
    console.log("Server running")
})
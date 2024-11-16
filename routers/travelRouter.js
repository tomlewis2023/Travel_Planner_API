const express =  require('express')
const travelRouter = express.Router()
const {gettravelplans,getTravelplanbyId,createTravelPlan,updateTravelplan,deleteTravelPlan} = require('../controllers/travelController')

//get travelplans
travelRouter.get('/',gettravelplans)

//get travelplans by id

travelRouter.get('/:id',getTravelplanbyId)

//create travel plans

travelRouter.post('/',createTravelPlan)

//update travel plans

travelRouter.patch('/:id',updateTravelplan)

//Delete travel plans

travelRouter.delete('/:id', deleteTravelPlan)



module.exports = travelRouter
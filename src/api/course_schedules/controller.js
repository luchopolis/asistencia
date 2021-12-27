const { errorResponse, success, notFound } = require('../../utils/response')
const Groups = require('../groups/groups')
const CourseSchedule = require('./model')



const create = async (req, res) => {
    try {
        const { schedule, group_id } = req.body
        const findGroup = await Groups.findOne({ where: { id: group_id }})
        if(!findGroup){
            notFound(res, 'group not found')
            return
        }
        if(!schedule) {
            success(res, { msg: 'schedule object required' }, 201)
            return
        }
        
        if(_checkKeys(schedule).noFields == false){
            success(res, _checkKeys(schedule))
            return
        }
        
        const saveSchedule = CourseSchedule.build({
            group_id: group_id,
            ..._checkKeys(schedule)   
        })
        
        const data = await saveSchedule.save()
        success(res, data)

    } catch (error) {
        errorResponse(res, 500, error.message)
    }
}

const _checkKeys = (obj) => {
    const days = ['Monday','Tuesday','Wednesday','Thrusday','Friday']
    const fields = Object.keys(obj).map((field) => field.charAt(0).toUpperCase() + field.slice(1, field.length) )
    const scheduleDays = {}
    if(fields.length == 0){
        return { msg: 'Need to provide least a field', noFields: true }
    }
    fields.forEach((day) => {
        if(days.indexOf(day) != -1){
            scheduleDays[day] = 1
        }
    })
    return scheduleDays
}


module.exports = { create }
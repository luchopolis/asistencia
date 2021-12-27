
const Course = require('./model')
const { notFound, success, errorResponse } = require('../../utils/response')

const create = async (req, res) => {
    try {
        const { name } = req.body
        const course = Course.build({
            name: name
        })
        const result = await course.save()

        success(res, { course: {
            id: result.id,
            name: result.name
        }})

    } catch (error) {
        errorResponse(res, 500, error.message)
    }
}



module.exports = { create }
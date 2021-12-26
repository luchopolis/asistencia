const notFound = (res, msg, status = 404) => {
    res.status(status).json({
        msg: msg || 'Resource Not Found'
    })
}

const success = (res, data = {}, status = 200) => {
    res.status(status).json(data)
}

const errorResponse = (res, status = 500, error) => {
    res.status(status).json({
        msg: error
    })
}

module.exports = { notFound, success, errorResponse }
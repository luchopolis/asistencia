const notFound = (res, status = 404) => {
    res.status(status).json({
        msg: 'Resource Not Found'
    })
}

const success = (res, data = {}, status = 200) => {
    res.status(status).json(data)
}

module.exports = { notFound, success }
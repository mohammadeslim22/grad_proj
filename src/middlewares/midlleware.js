module.exports = function (req, res, next) {
    if (req.params.id === '0') {
        
        next('unauthorized')
    } else {
        next()
    }

}
const error = (res, status, message, err) => {
    return res.status(status).json({
        status,
        message,
        err
    });
}

module.exports = error;
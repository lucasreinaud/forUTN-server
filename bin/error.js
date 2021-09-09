const error = (res, status, message, err) => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    return res.status(status).json({
        response: 'ERROR',
        message : "["+ date + " :" + time + "]" + message ,
        err
    });
}

module.exports = error;
const { createLogger, transports } = require('winston');
const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: 'combined.log' })],
  exceptionHandlers: [new transports.File({ filename: 'exceptions.log' })],
  rejectionHandlers: [new transports.File({ filename: 'rejections.log' })],
});

//   winston.add(new winston.transports.MongoDB,{db:'mongodb+srv://dthadmin:hiephihi123@cluster0.owazy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'});
module.exports = function (err, req, res, next) {
  logger.log({
    level: 'error',
    message: err.message,
  });
  //middle ware erro
  res.status(400).send('Something failed error ..');
};

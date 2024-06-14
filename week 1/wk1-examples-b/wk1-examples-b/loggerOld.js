//THIS IS THE OLD SCHOOL WAY (DON'T USE THIS)
var logger = {
  message: "Hello, how are you?",
  logMessage: function() {
    console.log(logger.message);
  }
};

logger.logMessage();
logger.message = "I've changed!";
logger.logMessage();
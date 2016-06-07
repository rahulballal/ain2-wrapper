const SysLogger = require('ain2');
const logger = new SysLogger({tag: process.env.appName || 'Node App', facility: 'syslog'});

// This is an INCREDIBLY basic wrapper.  When you require it, you need to do require('logger')();  Do not forget the extra parens.

module.exports = function() {
  return {
    emerge: (message) => { logMessage('emerge', message) },
    alert: (message) => { logMessage('alert', message) },
    crit: (message) => { logMessage('crit', message) },
    err: (message) => { logMessage('err', message) },
    warn: (message) => { logMessage('warn', message) },
    notice: (message) => { logMessage('notice', message) },
    info: (message) => { logMessage('info', message) },
    debug: (message) => { logMessage('debug', message) }
  };
}

function logMessage(level, message) {
  if (typeof(message) === 'object') {
    message = JSON.stringify(message);
  }
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // If in development mode, console.log it
    console.log(`${level.toUpperCase()} - ${message}`);
  } else {
    // Send to syslog if not in development
    switch (level) {
      case 'emerge':
        syslog.emerge(message);
      case 'alert':
        syslog.alert(message);
      case 'crit':
        syslog.crit(message);
      case 'err':
        syslog.err(message);
      case 'warn':
        syslog.warn(message);
      case 'notice':
        syslog.notice(message);
      case 'info':
        syslog.info(message);
      case 'debug':
        syslog.debug(message);
      default:
        syslog.debug(message);
    }
  }
}

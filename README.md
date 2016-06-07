== Ain 2 Wrapper ==

This just creates a simple wrapper around ain2 that instantiates an object.  It was created mostly because I didn't want to override console. 

You can use it like below:

~~~~
let logger = require('ain2-wrapper')();

logger.warn("This is a warning.");
// This will output "WARN - This is a warning."
~~~~

This supports the same log levels as ain.  Severity level is referenced to [RFC3164](http://www.faqs.org/rfcs/rfc3164.html)

~~~~
#  String   Description
-----------------------
0  emerg    Emergency: system is unusable
1  alert    Alert: action must be taken immediately
2  crit     Critical: critical conditions
3  err      Error: error conditions
4  warn     Warning: warning conditions
5  notice   Notice: normal but significant condition
6  info     Informational: informational messages
7  debug    Debug: debug-level messages
~~~~


Note that OSX uses a non standard syslog, and this likely won't work in any mode other than "development" on a mac.

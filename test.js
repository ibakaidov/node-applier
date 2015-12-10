var applier = require('./');
var hi = applier(console.log, "Hello,", new applier.Argument(0));

hi("Ivan");
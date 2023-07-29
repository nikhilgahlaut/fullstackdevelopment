var os = require('os')
console.log(`CPU architecture: ` + os.arch());
console.log(`CPU free memory: ` + os.freemem());
console.log(`CPU total memory: ` + os.totalmem());
console.log(`CPU network Interfaces: ` + os.networkInterfaces());
console.log(`CPU temporary files: ` + os.tmpdir());
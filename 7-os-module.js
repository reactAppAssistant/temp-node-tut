const os = require("os");

//  info about current user
const user = os.userInfo();
console.log(user);

// uptime of computer

console.log(`System uptime is ${os.uptime()} seconds`);

// get different values of OS properties

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.table(currentOS);

const os = require('os')


// info about current user
const user = os.userInfo()

console.log(user)

// method to check uptime of os

console.log(`the os uptime is ${os.uptime}`)


const currentOS = {
    name: os.type(),
    relese: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);

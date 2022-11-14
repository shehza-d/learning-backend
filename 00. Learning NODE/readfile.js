const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./content/one.txt','utf8')
const second = readFileSync("./content/second.txt","utf8")


const result = writeFileSync("./content/sync_result.txt",
`there is result of: ${first},${second}`, {flag: 'a' })


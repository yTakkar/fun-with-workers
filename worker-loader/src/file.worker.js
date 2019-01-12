// I can use NPM modules which is not possible in today's native workers.
// It's still a web-worker though.

const _ = require('lodash')

const array1 = [1,2,3,4,5]
const array2 = [1,2,3]

self.postMessage(_.difference(array1, array2))
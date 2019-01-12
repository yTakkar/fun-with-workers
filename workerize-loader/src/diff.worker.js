const _  = require('lodash')

const array1 = [1,2,3,4,5]
const array2 = [1,2,3]

export const diff = () =>_.difference(array1, array2)
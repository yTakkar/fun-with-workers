__webpack_public_path__ = '/dist/'

const loopWorker = require('./loop.worker')()
const githubWorker = require('./github.worker')()
const diffWorker = require('./diff.worker')()

loopWorker.expensive(1000).then(count => {
  console.log(`Ran ${count} loops`)
})

githubWorker.getProfile('yTakkar')
  .then(profile => {
    console.log(profile)
  })
  .catch(e => console.log(e))

  diffWorker.diff().then(resp => console.log(resp))

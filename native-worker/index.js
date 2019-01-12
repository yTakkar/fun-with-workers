// Native web-worker usage
if (window.Worker) {
  const worker = new Worker('./worker.js')

  worker.onmessage = e => {
    console.log('Message received from the worker in the file = ', e.data)
  }

  worker.postMessage({
    name: 'Faiyaz',
    age: 20
  })
}
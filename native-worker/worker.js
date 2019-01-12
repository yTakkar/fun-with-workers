postMessage('hello,World!!')

onmessage =  function(e) {
  console.log('Message received from the file in the worker = ', e.data)
}
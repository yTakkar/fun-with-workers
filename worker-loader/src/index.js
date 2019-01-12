import Worker from './file.worker';

const worker = new Worker();

worker.onmessage = function(e) {
  console.log(e.data)
}

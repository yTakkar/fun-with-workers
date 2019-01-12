import workerize from 'workerize'

// Workerize moves a module into a Web Worker
let worker = workerize(`
	export function add(a, b) {
		let start = Date.now();
		while (Date.now()-start < 500);
		return a + b;
  };
  export function getName(username) {
    return new Promise((resolve, reject) => {
      fetch('https://api.github.com/users/' + username)
        .then(resp => resp.json())
        .then(resp => resolve(resp))
        .catch(e => reject(e))
    })
  }
`);

(async () => {
  console.log('----- FROM WORKERIZE FILE ----')
  console.log(await worker.add(3, 9));
  console.log(await worker.getName('yTakkar'))
})();

# Fun with workers

This repo contains 4 directories to showcase different ways to work with a Web-Worker in JavaScript.

- [Native-Worker](https://github.com/yTakkar/fun-with-workers/blob/master/native-worker)
- [Worker-Loader](https://github.com/yTakkar/fun-with-workers/blob/master/worker-loader)
- [Workerize](https://github.com/yTakkar/fun-with-workers/blob/master/workerize)
- [Workerize-Loader](https://github.com/yTakkar/fun-with-workers/blob/master/workerize-loader)

# About each directory

### Native-Worker
This directory showcases the native approach of using a worker. 

### Worker-Loader
Showcases how a script file can be used as a worker. Uses [this](https://github.com/webpack-contrib/worker-loader) webpack plugin.

### Workerize
Uses awesome module by [Jason Miller](https://github.com/developit) and that is [Workerize](https://github.com/developit/workerize). Allows us to move a module into web-worker. Basically you'll be writing you web-worker in a function that accepts a tagged template literal.

### Workerize-Loader
Uses [workerize-loader](https://github.com/developit/workerize-loader) webpack-plugin. Best choice in my opinion.

# Running examples of above directories
1. First `clone` the repo.

2. Then `cd` into any of them. For eg.
    ```bash
    cd workerize-loader
    ```
3. Install required dependencies. 
   ```bash
    yarn
    ```

4. Start the development server.
    ```bash
    yarn start
    ```
    
5. Visit [:4001](http://localhost:4001)
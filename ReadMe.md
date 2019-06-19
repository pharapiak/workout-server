
## Description

Simple Typescript/Node application, using the [Nest](https://github.com/nestjs/nest) framework.

## Installation

```
$ npm install
```

## Running the app

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# To build docker image:
 
```
docker build -t pharapiak/workout-server-node .

```
To run it (the first 3000 is external port) (winpty and -it allows for passing CTL C to kill and cleanup process)
```
winpty docker run --rm -it -p 127.0.0.1:3000:3000 pharapiak/workout-server-node
```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Paul Harapiak](https://www.linkedin.com/in/paul-harapiak)



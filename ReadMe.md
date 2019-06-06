To build docker image:
 
```
docker build -t pharapiak/workout-server-node .

```
To run it (3000 is external port) (winpty and -it allows for passing CTL C to kill and cleanup process)
```
winpty docker run --rm -it -p 3000:3001 pharapiak/workout-server-node
```

To run outside of Docker, to attach debugger, and restart on code changes
```
npm run dev
```
and debug with VS Code's 'attach' debug configuration


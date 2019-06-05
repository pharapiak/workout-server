To build docker image:
 
```
docker build -t pharapiak/workout-server-node .

```
To run it (3000 is external port)
```
docker run --rm -p 3000:3001 pharapiak/workout-server-node
```

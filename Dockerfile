FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY src ./src
COPY tsconfig.json tsconfig.build.json tslint.json ./

RUN npm run build

#tell the server what port to use
ENV PORT 3000

#and expose it outside of the Docker container
EXPOSE 3000

CMD ["node","dist/main.js"]


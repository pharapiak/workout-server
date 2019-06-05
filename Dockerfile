FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY src ./src
COPY tsconfig.json tslint.json ./

RUN npm run build

#tell the server what port to use
ENV PORT 3001

#and expose it outside of the Docker container
EXPOSE 3001

CMD ["node", "dist"]

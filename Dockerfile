FROM node:12.13.0-alpine

WORKDIR /api

COPY package*.json ./
COPY *.js ./

RUN npm ci

COPY . .

EXPOSE 1337
CMD [ “npm”, “start” ]

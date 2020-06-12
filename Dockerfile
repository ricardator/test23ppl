FROM node:latest

WORKDIR /api

COPY package*.json ./
COPY *.js ./

RUN npm ci

COPY . .
RUN npm install -g --save-dev nodemon
RUN npm install -g express --save
RUN npm install -g mongoose --save
EXPOSE 1337
CMD [ “npm”, “start” ]

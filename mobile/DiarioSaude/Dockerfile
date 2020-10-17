FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
COPY app.json /usr/src/app/app.json

RUN npm install --global expo-cli

COPY . /usr/src/app

CMD expo start

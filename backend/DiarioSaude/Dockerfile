FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install

COPY . /usr/src/app

EXPOSE 8080

CMD npm run dev

FROM node:alpine

WORKDIR app

ADD package*.json /app

RUN yarn install

EXPOSE 3000

CMD yarn start
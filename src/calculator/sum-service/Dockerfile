FROM node:10-alpine

USER node

ARG ENVIRONMENT
ARG DEBUG_PORT_NAME
ARG NODE_PORT

ENV NODE_ENV=$ENVIRONMENT PORT=$NODE_PORT

RUN mkdir /home/node/app
WORKDIR /home/node/app
ADD ./dist/* dist/
ADD ./package.json package.json

EXPOSE $NODE_PORT $DEBUG_PORT_NAME

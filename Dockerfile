FROM node:18-bullseye-slim

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y git

USER node

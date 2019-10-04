FROM node:lts-stretch-slim as compile

RUN npm install -g @angular/cli

WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app
CMD ng serve --host '0.0.0.0'

FROM node:23-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .

EXPOSE 3000

CMD ["node", "index.js"]
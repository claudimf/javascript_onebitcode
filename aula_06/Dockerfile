FROM node:20.12.2

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["nodemon", "server.js"]
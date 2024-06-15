FROM node:20.12.2

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 3001

CMD ["nodemon", "server.js"]
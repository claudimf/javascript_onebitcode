FROM node:20.12.2
WORKDIR /app
COPY package.json .
RUN npm install express
RUN npm install --quiet
COPY . .
EXPOSE 3000
EXPOSE 5173
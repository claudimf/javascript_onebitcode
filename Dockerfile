FROM node:20.12.2
WORKDIR /app
COPY package.json .
RUN npm install --quiet
COPY . .
EXPOSE 3000
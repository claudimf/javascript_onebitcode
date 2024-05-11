FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install vite

COPY . .

RUN npm run build

EXPOSE 5173

# http://localhost:5173/
CMD ["npm", "run", "dev"]
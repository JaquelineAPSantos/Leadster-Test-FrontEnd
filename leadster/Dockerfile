FROM node:20-alpine

WORKDIR /app

RUN npm install -g next

RUN npm install react react-dom

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

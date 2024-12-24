FROM node:22-alpine3.21

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

EXPOSE 5000

CMD ["npm", "run", "start"]

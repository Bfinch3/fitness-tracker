FROM node:18:18

COPY package.json ./

COPY ./client/package.json ./client/package.json

COPY ./server/package.json ./server/package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000-4000

ENV NODE_ENV=production

CMD ["npm", "run", "start"]
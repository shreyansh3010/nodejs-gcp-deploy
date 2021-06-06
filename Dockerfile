FROM node:12

ENV PORT 2000

WORKDIR /usr/src/app

COPY package*.json /

RUN npm install

COPY . .

EXPOSE 2000

CMD ["npm", "start"]
FROM node:14

WORKDIR /app

COPY /app/package.json .

RUN npm install

COPY /app .

EXPOSE 8005

CMD [ "npm", "start" ]
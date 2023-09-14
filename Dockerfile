# Node.js 이미지를 기반으로합니다.
FROM node:18


WORKDIR /app


COPY package*.json ./


RUN yarn


COPY . .


RUN yarn build

EXPOSE 3000

CMD [ "npm", "start" ]

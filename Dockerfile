# Node.js 이미지를 기반으로합니다.
FROM node:22


WORKDIR /app


COPY package.json yarn.lock ./


RUN yarn install --frozen-lockfile


COPY . .


RUN yarn build

EXPOSE 3000

CMD [ "npm", "start" ]

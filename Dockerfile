FROM node:16-alpine
ADD . /app

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
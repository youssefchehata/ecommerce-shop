FROM node:20-alpine3.16
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
ENV PORT=3000
EXPOSE ${PORT}
CMD [ "npm", "start" ]
